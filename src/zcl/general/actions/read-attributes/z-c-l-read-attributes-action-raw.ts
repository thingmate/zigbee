import { abortify, sleep } from '@xstd/abortable';
import { AsyncFunction, type AsyncFunctionLike } from '@xstd/async-function';
import { block } from '@xstd/block';
import { NONE, type None } from '@xstd/none';
import type { ZCLReadAttributesCommandPayload } from '../../commands/built-in/0x00-read-attributes/payload/z-c-l-read-attributes-command-payload.ts';
import { ZCLReadAttributesCommand } from '../../commands/built-in/0x00-read-attributes/z-c-l-read-attributes-command.ts';
import type { ZCLReadAttributesResponseCommandPayload } from '../../commands/built-in/0x01-read-attributes-response/payload/z-c-l-read-attributes-response-command-payload.ts';
import type { ZCLReadAttributesStatusRecordField } from '../../commands/built-in/0x01-read-attributes-response/status-record-field/z-c-l-read-attributes-status-record-field.ts';
import { ZCLReadAttributesResponseCommand } from '../../commands/built-in/0x01-read-attributes-response/z-c-l-read-attributes-response-command.ts';
import type {
  ZCLGeneralCommandArguments,
  ZCLGeneralCommandOptions,
} from '../../commands/command/z-c-l-general-command.ts';
import type { ZCLReadAttributesActionResult } from './z-c-l-read-attributes-action-result.ts';

export interface ZCLReadAttributesActionRawOptions {
  readonly readAttributesCommand: ZCLReadAttributesCommand;
  readonly readAttributesResponseCommand: ZCLReadAttributesResponseCommand;
  /**
   * Time window, in milliseconds, during which concurrent calls targeting the same cluster
   * are accumulated and grouped into a single request.
   *
   * The first call opens the window; calls arriving during it are merged into the same request.
   * Calls arriving while a request is in-flight start a new window.
   *
   * Set to `0` to disable grouping.
   */
  readonly debounceMs?: number;
}

export interface ZCLReadAttributesActionCommandOptions extends Omit<
  ZCLGeneralCommandOptions<void>,
  'payload'
> {
  readonly attributes: readonly number[];
}

export type ZCLReadAttributesActionArguments = readonly [
  options: ZCLReadAttributesActionCommandOptions,
];

export class ZCLReadAttributesActionRaw extends AsyncFunction<
  ZCLReadAttributesActionArguments,
  ZCLReadAttributesActionResult
> {
  constructor({
    readAttributesCommand,
    readAttributesResponseCommand,
    debounceMs = 100,
  }: ZCLReadAttributesActionRawOptions) {
    const action: AsyncFunction<ZCLReadAttributesActionArguments, ZCLReadAttributesActionResult> =
      AsyncFunction.fromSendAndReceive<
        ZCLReadAttributesActionArguments,
        ZCLReadAttributesActionResult
      >({
        send: readAttributesCommand.send.mapArguments(
          ({
            attributes,
            ...options
          }: ZCLReadAttributesActionCommandOptions): ZCLGeneralCommandArguments<ZCLReadAttributesCommandPayload> => {
            return [
              {
                ...options,
                payload: attributes,
              },
            ];
          },
        ),
        receive: new AsyncFunction<ZCLReadAttributesActionArguments, ZCLReadAttributesActionResult>(
          (
            signal: AbortSignal,
            {
              cluster: requestedCluster,
              attributes: requestedAttributes,
            }: ZCLReadAttributesActionCommandOptions,
          ): Promise<ZCLReadAttributesActionResult> => {
            const attributeStatusRecordFieldById: Map<number, ZCLReadAttributesStatusRecordField> =
              new Map<number, ZCLReadAttributesStatusRecordField>();

            return readAttributesResponseCommand.observe
              .mapFilter(
                ([
                  { payload: receivedAttributes, ...receivedOptions },
                ]: ZCLGeneralCommandArguments<ZCLReadAttributesResponseCommandPayload>):
                  ZCLReadAttributesActionResult | None => {
                  if (receivedOptions.cluster !== requestedCluster) {
                    return NONE;
                  }

                  for (const attributeStatusRecordField of receivedAttributes) {
                    attributeStatusRecordFieldById.set(
                      attributeStatusRecordField.id,
                      attributeStatusRecordField,
                    );
                  }

                  const attributeStatusRecordFields: ZCLReadAttributesStatusRecordField[] = [];

                  for (const attributeId of requestedAttributes) {
                    const attributeStatusRecordField:
                      ZCLReadAttributesStatusRecordField | undefined =
                      attributeStatusRecordFieldById.get(attributeId);

                    if (attributeStatusRecordField === undefined) {
                      return NONE; // not every requested attribute received yet
                    }

                    attributeStatusRecordFields.push(attributeStatusRecordField);
                  }

                  return attributeStatusRecordFields;
                },
              )
              .first(signal);
          },
        ),
      });

    let input: AsyncFunctionLike<ZCLReadAttributesActionArguments, ZCLReadAttributesActionResult> =
      action;

    if (debounceMs > 0) {
      const batchByCluster: Map<number /* cluster */, ReadAttributesBatch> = new Map<
        number /* cluster */,
        ReadAttributesBatch
      >();

      input = async (
        signal: AbortSignal,
        { cluster, attributes }: ZCLReadAttributesActionCommandOptions,
      ): Promise<ZCLReadAttributesActionResult> => {
        signal.throwIfAborted();

        let batch: ReadAttributesBatch;

        const existingBatch: ReadAttributesBatch | undefined = batchByCluster.get(cluster);

        if (existingBatch === undefined) {
          const controller: AbortController = new AbortController();
          const attributeIds: Set<number> = new Set<number>(attributes);
          const waiterSignals: Set<AbortSignal> = new Set<AbortSignal>();

          const promise: Promise<ZCLReadAttributesActionResult> = block(
            async (): Promise<ZCLReadAttributesActionResult> => {
              await sleep(debounceMs, { signal: controller.signal });
              batchByCluster.delete(cluster);
              return action
                .call(controller.signal, {
                  cluster,
                  attributes: Array.from(attributeIds),
                })
                .finally((): void => {
                  controller.abort(); // releases the waiter signals' listeners
                });
            },
          );

          batch = { attributeIds, waiterSignals, controller, promise };
          batchByCluster.set(cluster, batch);
        } else {
          batch = existingBatch;

          for (const attributeId of attributes) {
            batch.attributeIds.add(attributeId);
          }
        }

        batch.waiterSignals.add(signal);
        signal.addEventListener(
          'abort',
          (): void => {
            batch.waiterSignals.delete(signal);

            if (batch.waiterSignals.size === 0) {
              batchByCluster.delete(cluster);
              batch.controller.abort(signal.reason);
            }
          },
          { once: true, signal: batch.controller.signal },
        );

        const sharedResult: ZCLReadAttributesActionResult = await abortify(batch.promise, {
          signal,
        });

        const attributeStatusRecordFieldById: Map<number, ZCLReadAttributesStatusRecordField> =
          new Map<number, ZCLReadAttributesStatusRecordField>(
            sharedResult.map(
              (attributeStatusRecordField): [number, ZCLReadAttributesStatusRecordField] => [
                attributeStatusRecordField.id,
                attributeStatusRecordField,
              ],
            ),
          );

        return attributes.map((attributeId: number): ZCLReadAttributesStatusRecordField => {
          const attributeStatusRecordField: ZCLReadAttributesStatusRecordField | undefined =
            attributeStatusRecordFieldById.get(attributeId);

          if (attributeStatusRecordField === undefined) {
            throw new Error(
              `Missing attribute 0x${attributeId.toString(16).padStart(4, '0')} in read attributes response.`,
            );
          }

          return attributeStatusRecordField;
        });
      };
    }

    super(input);
  }
}

/* INTERNAL */

interface ReadAttributesBatch {
  readonly attributeIds: Set<number>;
  readonly waiterSignals: Set<AbortSignal>;
  readonly controller: AbortController;
  readonly promise: Promise<ZCLReadAttributesActionResult>;
}
