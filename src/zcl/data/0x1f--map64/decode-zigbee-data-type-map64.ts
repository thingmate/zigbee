import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeMap64(decoder: Decoder): bigint {
  return decoder.uint64LE();
}
