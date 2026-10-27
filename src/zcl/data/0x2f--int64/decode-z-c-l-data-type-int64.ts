import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt64(decoder: Decoder): bigint {
  return decoder.int64LE();
}
