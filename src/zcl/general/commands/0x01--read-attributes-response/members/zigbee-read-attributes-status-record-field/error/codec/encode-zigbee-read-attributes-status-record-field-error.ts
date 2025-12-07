import { type Encoder } from '@xstd/codec';
import { type ZigbeeReadAttributesStatusRecordFieldError } from '../zigbee-read-attributes-status-record-field-error.js';

export function encodeZigbeeReadAttributesStatusRecordFieldError(
  encoder: Encoder,
  record: ZigbeeReadAttributesStatusRecordFieldError,
): void {
  encoder.uint16LE(record.id);
  encoder.uint8(record.status);
}
