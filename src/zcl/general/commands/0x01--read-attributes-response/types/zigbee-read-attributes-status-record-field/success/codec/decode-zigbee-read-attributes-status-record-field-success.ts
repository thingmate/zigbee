import { type Decoder } from '@xstd/codec';
import { decodeZigbeeDataTypeUnknown } from '../../../../../../../data/unknown/decode-zigbee-data-type-unknown.js';
import { type ZigbeeReadAttributesStatusRecordFieldSuccess } from '../zigbee-read-attributes-status-record-field-success.js';

export function decodeZigbeeReadAttributesStatusRecordFieldSuccess(
  decoder: Decoder,
  { id, status }: Pick<ZigbeeReadAttributesStatusRecordFieldSuccess, 'id' | 'status'>,
): ZigbeeReadAttributesStatusRecordFieldSuccess {
  const type: number = decoder.uint8();
  const value: unknown = decodeZigbeeDataTypeUnknown(decoder, type);

  return {
    id,
    status,
    type,
    value,
  };
}
