import { AsyncFunction } from '@xstd/async-function';
import { ZCLStatusError } from '../../../status/z-c-l-status-error.ts';
import { isZCLReadAttributesStatusRecordFieldSuccess } from '../../commands/built-in/0x01-read-attributes-response/status-record-field/success/is-z-c-l-read-attributes-status-record-field-success.ts';
import type { ZCLReadAttributesStatusRecordField } from '../../commands/built-in/0x01-read-attributes-response/status-record-field/z-c-l-read-attributes-status-record-field.ts';
import type { ZCLGeneralCommandOptions } from '../../commands/command/z-c-l-general-command.ts';
import type { ZCLReadAttributesActionResult } from '../read-attributes/z-c-l-read-attributes-action-result.ts';
import type { ZCLReadAttributesAction } from '../read-attributes/z-c-l-read-attributes-action.ts';

export interface ZCLReadAttributeActionRawOptions {
  readonly readAttributesAction: ZCLReadAttributesAction;
}

export interface ZCLReadAttributeActionCommandOptions extends Omit<
  ZCLGeneralCommandOptions<void>,
  'payload'
> {
  readonly attribute: number;
}

export type ZCLReadAttributeActionArguments = readonly [
  options: ZCLReadAttributeActionCommandOptions,
];

export class ZCLReadAttributeActionRaw extends AsyncFunction<
  ZCLReadAttributeActionArguments,
  unknown
> {
  constructor({ readAttributesAction }: ZCLReadAttributeActionRawOptions) {
    super(
      new AsyncFunction<ZCLReadAttributeActionArguments, unknown>(
        (
          signal: AbortSignal,
          { attribute, ...options }: ZCLReadAttributeActionCommandOptions,
        ): Promise<unknown> => {
          return readAttributesAction
            .call(signal, {
              ...options,
              attributes: [attribute],
            })
            .then((records: ZCLReadAttributesActionResult): unknown => {
              const record: ZCLReadAttributesStatusRecordField | undefined = records.find(
                (attributeStatusRecordField: ZCLReadAttributesStatusRecordField): boolean => {
                  return attributeStatusRecordField.id === attribute;
                },
              );

              if (record === undefined) {
                throw new Error(
                  `Missing attribute 0x${attribute.toString(16).padStart(4, '0')} in read attributes response.`,
                );
              }

              if (isZCLReadAttributesStatusRecordFieldSuccess(record)) {
                return record.value;
              } else {
                throw new ZCLStatusError(record.status, record.id);
              }
            });
        },
      ),
    );
  }
}
