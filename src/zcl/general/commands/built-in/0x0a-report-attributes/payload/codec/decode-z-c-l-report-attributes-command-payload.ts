import { type Decoder } from '@xstd/codec';
import { decodeZCLReportAttributesAttributeReportField } from '../../attribute-report-field/codec/decode-z-c-l-report-attributes-attribute-report-field.ts';
import type { ZCLReportAttributesAttributeReportField } from '../../attribute-report-field/z-c-l-report-attributes-attribute-report-field.ts';
import type { ZCLReportAttributesCommandPayload } from '../z-c-l-report-attributes-command-payload.ts';

export function decodeZCLReportAttributesCommandPayload(
  decoder: Decoder,
): ZCLReportAttributesCommandPayload {
  const records: ZCLReportAttributesAttributeReportField[] = [];

  while (!decoder.done) {
    records.push(decodeZCLReportAttributesAttributeReportField(decoder));
  }

  return records;
}
