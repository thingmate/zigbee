import type { ZCLPayloadMapper } from '../../../../../../payload/mapper/z-c-l-payload-mapper.ts';
import { ServerZCLClusterCommand } from '../../../../../primitives/command/pre-filter/host/server/server-z-c-l-cluster-command.ts';
import type { PrefilteredZCLClusterCommandStream } from '../../../../../primitives/command/pre-filter/prefiltered-z-c-l-cluster-command.ts';

export class OnOffClusterServerZCLClusterCommand<
  GArguments extends readonly unknown[],
> extends ServerZCLClusterCommand<GArguments> {
  constructor(
    stream: PrefilteredZCLClusterCommandStream,
    staticCommand: number,
    map: ZCLPayloadMapper<GArguments>,
  ) {
    super(stream, 0x0006, staticCommand, map);
  }
}
