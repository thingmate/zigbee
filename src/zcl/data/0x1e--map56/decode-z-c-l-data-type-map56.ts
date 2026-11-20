import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeMap56(decoder: Decoder): bigint {
  return decoder.uint56LE();
}
