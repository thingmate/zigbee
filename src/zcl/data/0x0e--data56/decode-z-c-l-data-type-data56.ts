import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeData56(decoder: Decoder): bigint {
  return decoder.uint56LE();
}
