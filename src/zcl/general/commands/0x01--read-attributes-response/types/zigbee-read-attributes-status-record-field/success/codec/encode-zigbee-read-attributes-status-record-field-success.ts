import { type Encoder } from '@xstd/codec';
import { encodeZigbeeDataTypeUnknown } from '../../../../../../../data/unknown/encode-zigbee-data-type-unknown.js';
import { type ZigbeeReadAttributesStatusRecordFieldSuccess } from '../zigbee-read-attributes-status-record-field-success.js';

export function encodeZigbeeReadAttributesStatusRecordFieldSuccess(
  encoder: Encoder,
  record: ZigbeeReadAttributesStatusRecordFieldSuccess,
): void {
  encoder.uint16LE(record.id);
  encoder.uint8(record.status);
  encoder.uint8(record.type);
  encodeZigbeeDataTypeUnknown(encoder, record.type, record.value);
}
