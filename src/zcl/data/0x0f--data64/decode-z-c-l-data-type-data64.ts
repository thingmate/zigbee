import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeData64(decoder: Decoder): bigint {
  return decoder.uint64LE();
}
