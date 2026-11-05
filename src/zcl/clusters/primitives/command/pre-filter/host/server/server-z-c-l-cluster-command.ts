import type { ZCLPayloadMapper } from '../../../../../../payload/mapper/z-c-l-payload-mapper.ts';

import {
  PrefilteredZCLClusterCommand,
  type PrefilteredZCLClusterCommandStream,
} from '../../prefiltered-z-c-l-cluster-command.ts';

/**
 * A cluster command received on the cluster server side:
 * frames are matched with the `client-to-server` direction.
 */
export class ServerZCLClusterCommand<
  GArguments extends readonly unknown[],
> extends PrefilteredZCLClusterCommand<GArguments> {
  constructor(
    stream: PrefilteredZCLClusterCommandStream,
    staticCluster: number,
    staticCommand: number,
    map: ZCLPayloadMapper<GArguments>,
  ) {
    super(stream, staticCluster, 'client-to-server', staticCommand, map);
  }
}
