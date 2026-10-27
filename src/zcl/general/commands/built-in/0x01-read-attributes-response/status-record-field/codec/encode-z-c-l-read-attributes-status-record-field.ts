import { type Encoder } from '@xstd/codec';
import { encodeZCLReadAttributesStatusRecordFieldError } from '../error/codec/encode-z-c-l-read-attributes-status-record-field-error.ts';
import { encodeZCLReadAttributesStatusRecordFieldSuccess } from '../success/codec/encode-z-c-l-read-attributes-status-record-field-success.ts';
import { isZCLReadAttributesStatusRecordFieldSuccess } from '../success/is-z-c-l-read-attributes-status-record-field-success.ts';
import { type ZCLReadAttributesStatusRecordField } from '../z-c-l-read-attributes-status-record-field.ts';

export function encodeZCLReadAttributesStatusRecordField(
  encoder: Encoder,
  record: ZCLReadAttributesStatusRecordField,
): void {
  if (isZCLReadAttributesStatusRecordFieldSuccess(record)) {
    encodeZCLReadAttributesStatusRecordFieldSuccess(encoder, record);
  } else {
    encodeZCLReadAttributesStatusRecordFieldError(encoder, record);
  }
}
