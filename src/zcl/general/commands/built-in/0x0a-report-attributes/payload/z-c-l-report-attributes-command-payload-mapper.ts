import { Decoder, Encoder } from '@xstd/codec';

import type { ZCLPayloadMapper } from '../../../../../payload/mapper/z-c-l-payload-mapper.ts';
import { decodeZCLReportAttributesCommandPayload } from './codec/decode-z-c-l-report-attributes-command-payload.ts';
import { encodeZCLReportAttributesCommandPayload } from './codec/encode-z-c-l-report-attributes-command-payload.ts';
import type { ZCLReportAttributesCommandPayload } from './z-c-l-report-attributes-command-payload.ts';

export type ZCLReportAttributesCommandPayloadMapper =
  ZCLPayloadMapper<ZCLReportAttributesCommandPayload>;

export const ZCL_REPORT_ATTRIBUTES_COMMAND_PAYLOAD_MAPPER: ZCLReportAttributesCommandPayloadMapper =
  Object.freeze({
    inOut: (attributes: ZCLReportAttributesCommandPayload): Uint8Array => {
      return Encoder.encode(attributes, encodeZCLReportAttributesCommandPayload);
    },
    outIn: (payload: Uint8Array): ZCLReportAttributesCommandPayload => {
      return Decoder.decode(payload, decodeZCLReportAttributesCommandPayload);
    },
  });
