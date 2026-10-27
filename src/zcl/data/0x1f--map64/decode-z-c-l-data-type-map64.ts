import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeMap64(decoder: Decoder): bigint {
  return decoder.uint64LE();
}
