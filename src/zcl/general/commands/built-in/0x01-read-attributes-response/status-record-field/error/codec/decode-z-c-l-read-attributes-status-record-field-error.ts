import { type Decoder } from '@xstd/codec';
import { type ZCLReadAttributesStatusRecordFieldError } from '../z-c-l-read-attributes-status-record-field-error.ts';

export function decodeZCLReadAttributesStatusRecordFieldError(
  _decoder: Decoder,
  { id, status }: Pick<ZCLReadAttributesStatusRecordFieldError, 'id' | 'status'>,
): ZCLReadAttributesStatusRecordFieldError {
  return {
    id,
    status,
  };
}
