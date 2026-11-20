import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt24(decoder: Decoder): number {
  return decoder.int24LE();
}
