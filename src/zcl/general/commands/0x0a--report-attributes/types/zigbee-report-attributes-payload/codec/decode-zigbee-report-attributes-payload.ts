import { type Decoder } from '@xstd/codec';
import { decodeZigbeeAttributeReportField } from '../../zigbee-attribute-report-field/codec/decode-zigbee-attribute-report-field.js';
import { type ZigbeeAttributeReportField } from '../../zigbee-attribute-report-field/zigbee-attribute-report-field.js';
import { type ZigbeeReportAttributesPayload } from '../zigbee-report-attributes-payload.js';

export function decodeZigbeeReportAttributesPayload(
  decoder: Decoder,
): ZigbeeReportAttributesPayload {
  const records: ZigbeeAttributeReportField[] = [];

  while (!decoder.done) {
    records.push(decodeZigbeeAttributeReportField(decoder));
  }

  return records;
}
