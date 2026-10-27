import type { HavingCommandAbilities } from '@thingmate/abilities';
import { CommandAbilities } from '@thingmate/abilities';
import { NONE, type None } from '@xstd/none';

import type { ZCLCommandFrame } from '../command-frame/z-c-l-command-frame.ts';

export type ZCLEndpointCommandFrame = Omit<ZCLCommandFrame, 'device' | 'endpoint'>;

export type ZCLEndpointArguments = readonly [commandFrame: ZCLEndpointCommandFrame];

export type ZCLEndpointStream = HavingCommandAbilities<ZCLEndpointArguments>;

/* PICK */

export type ZCLEndpointSelectStreamArguments = readonly [commandFrame: ZCLCommandFrame];
export type ZCLEndpointSelectStream = HavingCommandAbilities<ZCLEndpointSelectStreamArguments>;

export interface ZCLEndpointSelectOptions {
  readonly device: number;
  readonly endpoint: number;
}

export class ZCLEndpoint extends CommandAbilities<ZCLEndpointArguments> {
  static select(
    { send, observe }: ZCLEndpointSelectStream,
    { device, endpoint }: ZCLEndpointSelectOptions,
  ): ZCLEndpoint {
    return new ZCLEndpoint({
      send: send.mapArguments(
        (zclCommandFrame: ZCLEndpointCommandFrame): ZCLEndpointSelectStreamArguments => {
          return [
            {
              ...zclCommandFrame,
              device,
              endpoint,
            },
          ];
        },
      ),
      observe: observe.mapFilter(
        ([
          { device: zclCommandFrameDevice, endpoint: zclCommandFrameEndpoint, ...zclCommandFrame },
        ]: ZCLEndpointSelectStreamArguments): ZCLEndpointArguments | None => {
          return zclCommandFrameDevice === device && zclCommandFrameEndpoint === endpoint
            ? [zclCommandFrame]
            : NONE;
        },
      ),
    });
  }
}
