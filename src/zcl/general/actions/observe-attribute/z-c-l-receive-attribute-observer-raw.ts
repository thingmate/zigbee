import { ObserveAbility } from '@thingmate/abilities';
import { ListenerResource } from '@xstd/listener-resource';
import { NONE, type None } from '@xstd/none';
import { ObservableAsyncFunction } from '@xstd/observable-async-function';
import type { ZCLReportAttributesCommandPayload } from '../../commands/built-in/0x0a-report-attributes/payload/z-c-l-report-attributes-command-payload.ts';
import { ZCLReportAttributesCommand } from '../../commands/built-in/0x0a-report-attributes/z-c-l-report-attributes-command.ts';
import type {
  ZCLGeneralCommandArguments,
  ZCLGeneralCommandOptions,
} from '../../commands/command/z-c-l-general-command.ts';

export interface ZCLReceiveAttributeObserverRawOptions {
  readonly reportAttributesCommand: ZCLReportAttributesCommand;
}

// export type ZCLReceiveAttributeObserverCommandOptions =
//   ZCLGeneralCommandOptions<number /* attribute id */>;

export interface ZCLReceiveAttributeObserverCommandOptions extends Omit<
  ZCLGeneralCommandOptions<void>,
  'payload'
> {
  readonly attribute: number;
}

export type ZCLReceiveAttributeObserverArguments = readonly [
  options: ZCLReceiveAttributeObserverCommandOptions,
];

export class ZCLReceiveAttributeObserverRaw extends ObserveAbility<
  unknown,
  ZCLReceiveAttributeObserverArguments
> {
  constructor({ reportAttributesCommand }: ZCLReceiveAttributeObserverRawOptions) {
    super(
      new ObservableAsyncFunction<unknown, ZCLReceiveAttributeObserverArguments>(
        (
          signal: AbortSignal,
          {
            cluster: staticCluster,
            attribute: staticAttributeId,
          }: ZCLReceiveAttributeObserverCommandOptions,
        ): Promise<ListenerResource<unknown>> => {
          return reportAttributesCommand.observe
            .mapFilter(
              ([
                { cluster, payload: attributes },
              ]: ZCLGeneralCommandArguments<ZCLReportAttributesCommandPayload>): unknown | None => {
                if (cluster === staticCluster) {
                  for (const attribute of attributes) {
                    if (attribute.id === staticAttributeId) {
                      return attribute.value;
                    }
                  }
                }
                return NONE;
              },
            )
            .call(signal);
        },
      ),
    );
  }
}
