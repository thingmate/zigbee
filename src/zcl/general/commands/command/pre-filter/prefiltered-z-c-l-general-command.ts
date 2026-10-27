import type { HavingCommandAbilities } from '@thingmate/abilities';
import { type None, NONE } from '@xstd/none';
import type {
  ZCLCommandFrame,
  ZCLCommandFrameDirection,
} from '../../../../command-frame/z-c-l-command-frame.ts';
import type { ZCLPayloadMapper } from '../../../../payload/mapper/z-c-l-payload-mapper.ts';
import {
  ZCLGeneralCommand,
  type ZCLGeneralCommandCommandFrame,
  type ZCLGeneralCommandStreamArguments,
} from '../z-c-l-general-command.ts';

export type PrefilteredZCLGeneralCommandCommandFrame = Pick<
  ZCLCommandFrame,
  'clusterSpecific' | 'direction' | 'command'
> &
  ZCLGeneralCommandCommandFrame;

export type PrefilteredZCLGeneralCommandStreamArguments = readonly [
  commandFrame: PrefilteredZCLGeneralCommandCommandFrame,
];

export type PrefilteredZCLGeneralCommandStream =
  HavingCommandAbilities<PrefilteredZCLGeneralCommandStreamArguments>;

export class PrefilteredZCLGeneralCommand<GPayload> extends ZCLGeneralCommand<GPayload> {
  constructor(
    { send, observe }: PrefilteredZCLGeneralCommandStream,
    staticDirection: ZCLCommandFrameDirection,
    staticCommand: number,
    payloadMapper: ZCLPayloadMapper<GPayload>,
  ) {
    super(
      {
        send: send.mapArguments(
          (
            zclCommandFrame: ZCLGeneralCommandCommandFrame,
          ): PrefilteredZCLGeneralCommandStreamArguments => {
            return [
              {
                ...zclCommandFrame,
                clusterSpecific: false,
                direction: staticDirection,
                command: staticCommand,
              },
            ];
          },
        ),
        observe: observe.mapFilter(
          ([
            { clusterSpecific, direction, command, ...zclCommandFrame },
          ]: PrefilteredZCLGeneralCommandStreamArguments):
            ZCLGeneralCommandStreamArguments | None => {
            return !clusterSpecific && direction === staticDirection && command === staticCommand
              ? [zclCommandFrame]
              : NONE;
          },
        ),
      },
      payloadMapper,
    );
  }
}
