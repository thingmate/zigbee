import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt16(decoder: Decoder): number {
  return decoder.int16LE();
}
