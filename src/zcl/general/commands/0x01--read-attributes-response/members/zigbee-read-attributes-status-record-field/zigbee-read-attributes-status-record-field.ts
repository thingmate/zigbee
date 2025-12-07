import { type ZigbeeReadAttributesStatusRecordFieldError } from './error/zigbee-read-attributes-status-record-field-error.js';
import { type ZigbeeReadAttributesStatusRecordFieldSuccess } from './success/zigbee-read-attributes-status-record-field-success.js';

export type ZigbeeReadAttributesStatusRecordField =
  | ZigbeeReadAttributesStatusRecordFieldSuccess
  | ZigbeeReadAttributesStatusRecordFieldError;
