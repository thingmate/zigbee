import { type Decoder } from '@xstd/codec';
import { decodeZCLReadAttributesStatusRecordFieldError } from '../error/codec/decode-z-c-l-read-attributes-status-record-field-error.ts';
import { decodeZCLReadAttributesStatusRecordFieldSuccess } from '../success/codec/decode-z-c-l-read-attributes-status-record-field-success.ts';
import { type ZCLReadAttributesStatusRecordField } from '../z-c-l-read-attributes-status-record-field.ts';

export function decodeZCLReadAttributesStatusRecordField(
  decoder: Decoder,
): ZCLReadAttributesStatusRecordField {
  const id: number = decoder.uint16LE();
  const status: number = decoder.uint8();

  if (status === 0x00) {
    return decodeZCLReadAttributesStatusRecordFieldSuccess(decoder, {
      id,
      status,
    });
  } else {
    return decodeZCLReadAttributesStatusRecordFieldError(decoder, {
      id,
      status,
    });
  }
}
