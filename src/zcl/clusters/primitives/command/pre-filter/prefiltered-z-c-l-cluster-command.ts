import type { HavingCommandAbilities } from '@thingmate/abilities';
import { NONE, type None } from '@xstd/none';
import type {
  ZCLCommandFrame,
  ZCLCommandFrameDirection,
} from '../../../../command-frame/z-c-l-command-frame.ts';
import type { ZCLPayloadMapper } from '../../../../payload/mapper/z-c-l-payload-mapper.ts';
import { ZCLClusterCommand } from '../z-c-l-cluster-command.ts';

export type PrefilteredZCLClusterCommandCommandFrame = Pick<
  ZCLCommandFrame,
  'cluster' | 'clusterSpecific' | 'direction' | 'command' | 'payload'
>;

export type PrefilteredZCLClusterCommandStreamArguments = readonly [
  commandFrame: PrefilteredZCLClusterCommandCommandFrame,
];

export type PrefilteredZCLClusterCommandStream =
  HavingCommandAbilities<PrefilteredZCLClusterCommandStreamArguments>;

export class PrefilteredZCLClusterCommand<
  GArguments extends readonly unknown[],
> extends ZCLClusterCommand<GArguments> {
  constructor(
    { send, observe }: PrefilteredZCLClusterCommandStream,
    staticCluster: number,
    staticDirection: ZCLCommandFrameDirection,
    staticCommand: number,
    { inOut, outIn }: ZCLPayloadMapper<GArguments>,
  ) {
    super({
      send: send.mapArguments(
        (...args: GArguments): PrefilteredZCLClusterCommandStreamArguments => {
          return [
            {
              cluster: staticCluster,
              clusterSpecific: true,
              direction: staticDirection,
              command: staticCommand,
              payload: inOut(args),
            },
          ];
        },
      ),
      observe: observe.mapFilter(
        ([
          { cluster, clusterSpecific, direction, command, payload },
        ]: PrefilteredZCLClusterCommandStreamArguments): GArguments | None => {
          return cluster === staticCluster &&
            clusterSpecific &&
            direction === staticDirection &&
            command === staticCommand
            ? outIn(payload)
            : NONE;
        },
      ),
    });
  }
}
