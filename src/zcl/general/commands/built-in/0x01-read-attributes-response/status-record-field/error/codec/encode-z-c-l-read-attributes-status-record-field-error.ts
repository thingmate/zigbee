import { type Encoder } from '@xstd/codec';
import { type ZCLReadAttributesStatusRecordFieldError } from '../z-c-l-read-attributes-status-record-field-error.ts';

export function encodeZCLReadAttributesStatusRecordFieldError(
  encoder: Encoder,
  record: ZCLReadAttributesStatusRecordFieldError,
): void {
  encoder.uint16LE(record.id);
  encoder.uint8(record.status);
}
