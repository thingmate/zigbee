import type { ZCLPayloadMapper } from '../../../../../../payload/mapper/z-c-l-payload-mapper.ts';

import {
  PrefilteredZCLClusterCommand,
  type PrefilteredZCLClusterCommandStream,
} from '../../prefiltered-z-c-l-cluster-command.ts';

/**
 * A cluster command bound to the `server-to-client` direction:
 * `observe` matches the frames received on the cluster client side,
 * and `send` emits frames as the cluster server would.
 */
export class ClientZCLClusterCommand<
  GArguments extends readonly unknown[],
> extends PrefilteredZCLClusterCommand<GArguments> {
  constructor(
    stream: PrefilteredZCLClusterCommandStream,
    staticCluster: number,
    staticCommand: number,
    map: ZCLPayloadMapper<GArguments>,
  ) {
    super(stream, staticCluster, 'server-to-client', staticCommand, map);
  }
}
