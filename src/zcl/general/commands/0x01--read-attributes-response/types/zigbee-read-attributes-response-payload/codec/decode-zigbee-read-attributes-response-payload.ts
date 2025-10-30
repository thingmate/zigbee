import { type Decoder } from '@xstd/codec';
import { decodeZigbeeReadAttributesResponseStatusRecord } from '../../zigbee-read-attributes-status-record-field/codec/decode-zigbee-read-attributes-response-status-record.js';
import { type ZigbeeReadAttributesStatusRecordField } from '../../zigbee-read-attributes-status-record-field/zigbee-read-attributes-status-record-field.js';
import { type ZigbeeReadAttributesResponsePayload } from '../zigbee-read-attributes-response-payload.js';

export function decodeZigbeeReadAttributesResponsePayload(
  decoder: Decoder,
): ZigbeeReadAttributesResponsePayload {
  const records: ZigbeeReadAttributesStatusRecordField[] = [];

  while (!decoder.done) {
    records.push(decodeZigbeeReadAttributesResponseStatusRecord(decoder));
  }

  return records;
}
