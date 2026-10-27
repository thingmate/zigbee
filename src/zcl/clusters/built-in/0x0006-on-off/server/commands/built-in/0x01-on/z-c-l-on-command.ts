import type { VoidArguments } from '../../../../../../../../misc/types/void-arguments.ts';
import { VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER } from '../../../../../../../payload/mapper/built-in/void/void-arguments-z-c-l-payload-mapper.ts';
import type { PrefilteredZCLClusterCommandStream } from '../../../../../../primitives/command/pre-filter/prefiltered-z-c-l-cluster-command.ts';

import { OnOffClusterServerZCLClusterCommand } from '../../command/on-off-cluster-server-z-c-l-cluster-command.ts';

export class ZCLOnCommand extends OnOffClusterServerZCLClusterCommand<VoidArguments> {
  constructor(stream: PrefilteredZCLClusterCommandStream) {
    super(stream, 0x01, VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER);
  }
}
