import { type Decoder } from '@xstd/codec';
import { decodeZCLDataTypeUnknown } from '../../../../../../../data/unknown/decode-z-c-l-data-type-unknown.ts';
import { type ZCLReadAttributesStatusRecordFieldSuccess } from '../z-c-l-read-attributes-status-record-field-success.ts';

export function decodeZCLReadAttributesStatusRecordFieldSuccess(
  decoder: Decoder,
  { id, status }: Pick<ZCLReadAttributesStatusRecordFieldSuccess, 'id' | 'status'>,
): ZCLReadAttributesStatusRecordFieldSuccess {
  const type: number = decoder.uint8();
  const value: unknown = decodeZCLDataTypeUnknown(decoder, type);

  return {
    id,
    status,
    type,
    value,
  };
}
