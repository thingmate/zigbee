import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeUint56(decoder: Decoder): bigint {
  return decoder.uint56LE();
}
