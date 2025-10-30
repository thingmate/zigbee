import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeUint64(decoder: Decoder): bigint {
  return decoder.uint64LE();
}
