import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt32(decoder: Decoder): number {
  return decoder.int32LE();
}
