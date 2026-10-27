import {
  PrefilteredZCLGeneralCommand,
  type PrefilteredZCLGeneralCommandStream,
} from '../../command/pre-filter/prefiltered-z-c-l-general-command.ts';
import { ZCL_READ_ATTRIBUTES_COMMAND_PAYLOAD_MAPPER } from './payload/z-c-l-read-attributes-command-payload-mapper.ts';
import type { ZCLReadAttributesCommandPayload } from './payload/z-c-l-read-attributes-command-payload.ts';

export class ZCLReadAttributesCommand extends PrefilteredZCLGeneralCommand<ZCLReadAttributesCommandPayload> {
  constructor(stream: PrefilteredZCLGeneralCommandStream) {
    super(stream, 'client-to-server', 0x00, ZCL_READ_ATTRIBUTES_COMMAND_PAYLOAD_MAPPER);
  }
}
