import { type ZCLReadAttributesStatusRecordFieldError } from './error/z-c-l-read-attributes-status-record-field-error.ts';
import { type ZCLReadAttributesStatusRecordFieldSuccess } from './success/z-c-l-read-attributes-status-record-field-success.ts';

export type ZCLReadAttributesStatusRecordField =
  ZCLReadAttributesStatusRecordFieldSuccess | ZCLReadAttributesStatusRecordFieldError;
