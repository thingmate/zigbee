import { type Encoder } from '@xstd/codec';
import { encodeZigbeeReadAttributesStatusRecordFieldError } from '../error/codec/encode-zigbee-read-attributes-status-record-field-error.js';
import { encodeZigbeeReadAttributesStatusRecordFieldSuccess } from '../success/codec/encode-zigbee-read-attributes-status-record-field-success.js';
import { isZigbeeReadAttributesStatusRecordFieldSuccess } from '../success/is-zigbee-read-attributes-status-record-field-success.js';
import { type ZigbeeReadAttributesStatusRecordField } from '../zigbee-read-attributes-status-record-field.js';

export function encodeZigbeeReadAttributesStatusRecordField(
  encoder: Encoder,
  record: ZigbeeReadAttributesStatusRecordField,
): void {
  if (isZigbeeReadAttributesStatusRecordFieldSuccess(record)) {
    encodeZigbeeReadAttributesStatusRecordFieldSuccess(encoder, record);
  } else {
    encodeZigbeeReadAttributesStatusRecordFieldError(encoder, record);
  }
}
