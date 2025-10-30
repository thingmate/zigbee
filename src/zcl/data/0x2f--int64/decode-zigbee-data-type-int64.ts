import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeInt64(decoder: Decoder): bigint {
  return decoder.int64LE();
}
