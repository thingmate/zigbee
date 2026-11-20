import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt56(decoder: Decoder): bigint {
  return decoder.int56LE();
}
