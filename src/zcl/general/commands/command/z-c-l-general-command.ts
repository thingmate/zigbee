import { type HavingCommandAbilities, CommandAbilities } from '@thingmate/abilities';
import type { ZCLCommandFrame } from '../../../command-frame/z-c-l-command-frame.ts';
import type { ZCLPayloadMapper } from '../../../payload/mapper/z-c-l-payload-mapper.ts';

export type ZCLGeneralCommandCommandFrame = Pick<ZCLCommandFrame, 'cluster' | 'payload'>;

export type ZCLGeneralCommandStreamArguments = readonly [
  commandFrame: ZCLGeneralCommandCommandFrame,
];

export type ZCLGeneralCommandStream = HavingCommandAbilities<ZCLGeneralCommandStreamArguments>;

export interface ZCLGeneralCommandOptions<GPayload> extends Pick<ZCLCommandFrame, 'cluster'> {
  readonly payload: GPayload;
}

export type ZCLGeneralCommandArguments<GPayload> = readonly [
  options: ZCLGeneralCommandOptions<GPayload>,
];

export class ZCLGeneralCommand<GPayload> extends CommandAbilities<
  ZCLGeneralCommandArguments<GPayload>
> {
  constructor(
    { send, observe }: ZCLGeneralCommandStream,
    { inOut, outIn }: ZCLPayloadMapper<GPayload>,
  ) {
    super({
      send: send.mapArguments(
        ({
          payload,
          ...options
        }: ZCLGeneralCommandOptions<GPayload>): ZCLGeneralCommandStreamArguments => {
          return [
            {
              ...options,
              payload: inOut(payload as GPayload),
            },
          ];
        },
      ),
      observe: observe.map(
        ([
          { payload, ...options },
        ]: ZCLGeneralCommandStreamArguments): ZCLGeneralCommandArguments<GPayload> => {
          return [
            {
              ...options,
              payload: outIn(payload),
            },
          ];
        },
      ),
    });
  }
}
