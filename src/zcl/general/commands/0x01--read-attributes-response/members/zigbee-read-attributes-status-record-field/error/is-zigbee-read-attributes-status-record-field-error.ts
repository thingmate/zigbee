import { type ZigbeeReadAttributesStatusRecordField } from '../zigbee-read-attributes-status-record-field.js';
import { type ZigbeeReadAttributesStatusRecordFieldError } from './zigbee-read-attributes-status-record-field-error.js';

export function isZigbeeReadAttributesStatusRecordFieldError(
  input: ZigbeeReadAttributesStatusRecordField,
): input is ZigbeeReadAttributesStatusRecordFieldError {
  return input.status !== 0x00;
}
