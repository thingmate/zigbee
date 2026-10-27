import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeUint64(decoder: Decoder): bigint {
  return decoder.uint64LE();
}
