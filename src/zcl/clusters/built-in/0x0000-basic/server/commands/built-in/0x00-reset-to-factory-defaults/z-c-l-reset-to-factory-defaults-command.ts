import type { VoidArguments } from '../../../../../../../../misc/types/void-arguments.ts';
import { VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER } from '../../../../../../../payload/mapper/built-in/void/void-arguments-z-c-l-payload-mapper.ts';
import type { PrefilteredZCLClusterCommandStream } from '../../../../../../primitives/command/pre-filter/prefiltered-z-c-l-cluster-command.ts';

import { BasicClusterServerZCLClusterCommand } from '../../command/basic-cluster-server-z-c-l-cluster-command.ts';

export class ZCLResetToFactoryDefaultsCommand extends BasicClusterServerZCLClusterCommand<VoidArguments> {
  constructor(stream: PrefilteredZCLClusterCommandStream) {
    super(stream, 0x00, VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER);
  }
}
