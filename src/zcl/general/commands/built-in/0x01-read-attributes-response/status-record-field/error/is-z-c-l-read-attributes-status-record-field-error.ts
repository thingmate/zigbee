import { type ZCLReadAttributesStatusRecordField } from '../z-c-l-read-attributes-status-record-field.ts';
import { type ZCLReadAttributesStatusRecordFieldError } from './z-c-l-read-attributes-status-record-field-error.ts';

/**
 * Returns whether the status record field reports an error status (anything other than success).
 */
export function isZCLReadAttributesStatusRecordFieldError(
  input: ZCLReadAttributesStatusRecordField,
): input is ZCLReadAttributesStatusRecordFieldError {
  return input.status !== 0x00;
}
