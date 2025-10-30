import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeData64(decoder: Decoder): bigint {
  return decoder.uint64LE();
}
