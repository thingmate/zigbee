import { type ZigbeeReadAttributesStatusRecordField } from '../zigbee-read-attributes-status-record-field.js';
import { type ZigbeeReadAttributesStatusRecordFieldSuccess } from './zigbee-read-attributes-status-record-field-success.js';

export function isZigbeeReadAttributesStatusRecordFieldSuccess(
  input: ZigbeeReadAttributesStatusRecordField,
): input is ZigbeeReadAttributesStatusRecordFieldSuccess {
  return input.status === 0x00;
}
