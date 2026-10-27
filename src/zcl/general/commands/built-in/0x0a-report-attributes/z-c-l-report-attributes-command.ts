import {
  PrefilteredZCLGeneralCommand,
  type PrefilteredZCLGeneralCommandStream,
} from '../../command/pre-filter/prefiltered-z-c-l-general-command.ts';
import { ZCL_REPORT_ATTRIBUTES_COMMAND_PAYLOAD_MAPPER } from './payload/z-c-l-report-attributes-command-payload-mapper.ts';
import type { ZCLReportAttributesCommandPayload } from './payload/z-c-l-report-attributes-command-payload.ts';

export class ZCLReportAttributesCommand extends PrefilteredZCLGeneralCommand<ZCLReportAttributesCommandPayload> {
  constructor(stream: PrefilteredZCLGeneralCommandStream) {
    super(stream, 'server-to-client', 0x0a, ZCL_REPORT_ATTRIBUTES_COMMAND_PAYLOAD_MAPPER);
  }
}
