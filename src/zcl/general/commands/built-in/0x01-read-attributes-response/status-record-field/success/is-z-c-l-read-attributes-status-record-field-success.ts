import { type ZCLReadAttributesStatusRecordField } from '../z-c-l-read-attributes-status-record-field.ts';
import { type ZCLReadAttributesStatusRecordFieldSuccess } from './z-c-l-read-attributes-status-record-field-success.ts';

/**
 * Returns whether the status record field reports a success status (0x00).
 */
export function isZCLReadAttributesStatusRecordFieldSuccess(
  input: ZCLReadAttributesStatusRecordField,
): input is ZCLReadAttributesStatusRecordFieldSuccess {
  return input.status === 0x00;
}
