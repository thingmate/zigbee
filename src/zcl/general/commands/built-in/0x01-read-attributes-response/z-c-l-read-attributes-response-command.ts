import {
  PrefilteredZCLGeneralCommand,
  type PrefilteredZCLGeneralCommandStream,
} from '../../command/pre-filter/prefiltered-z-c-l-general-command.ts';
import { ZCL_READ_ATTRIBUTES_RESPONSE_COMMAND_PAYLOAD_MAPPER } from './payload/z-c-l-read-attributes-response-command-payload-mapper.ts';
import type { ZCLReadAttributesResponseCommandPayload } from './payload/z-c-l-read-attributes-response-command-payload.ts';

export class ZCLReadAttributesResponseCommand extends PrefilteredZCLGeneralCommand<ZCLReadAttributesResponseCommandPayload> {
  constructor(stream: PrefilteredZCLGeneralCommandStream) {
    super(stream, 'server-to-client', 0x01, ZCL_READ_ATTRIBUTES_RESPONSE_COMMAND_PAYLOAD_MAPPER);
  }
}
