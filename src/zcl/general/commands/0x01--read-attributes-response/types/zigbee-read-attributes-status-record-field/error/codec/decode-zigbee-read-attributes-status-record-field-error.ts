import { type Decoder } from '@xstd/codec';
import { type ZigbeeReadAttributesStatusRecordFieldError } from '../zigbee-read-attributes-status-record-field-error.js';

export function decodeZigbeeReadAttributesStatusRecordFieldError(
  _decoder: Decoder,
  { id, status }: Pick<ZigbeeReadAttributesStatusRecordFieldError, 'id' | 'status'>,
): ZigbeeReadAttributesStatusRecordFieldError {
  return {
    id,
    status,
  };
}
