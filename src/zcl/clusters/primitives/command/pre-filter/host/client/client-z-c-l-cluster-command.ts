import type { ZCLPayloadMapper } from '../../../../../../payload/mapper/z-c-l-payload-mapper.ts';

import {
  PrefilteredZCLClusterCommand,
  type PrefilteredZCLClusterCommandStream,
} from '../../prefiltered-z-c-l-cluster-command.ts';

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
