import { type Encoder } from '@xstd/codec';
import { encodeZCLDataTypeUnknown } from '../../../../../../../data/unknown/encode-z-c-l-data-type-unknown.ts';
import { type ZCLReadAttributesStatusRecordFieldSuccess } from '../z-c-l-read-attributes-status-record-field-success.ts';

export function encodeZCLReadAttributesStatusRecordFieldSuccess(
  encoder: Encoder,
  record: ZCLReadAttributesStatusRecordFieldSuccess,
): void {
  encoder.uint16LE(record.id);
  encoder.uint8(record.status);
  encoder.uint8(record.type);
  encodeZCLDataTypeUnknown(encoder, record.type, record.value);
}
