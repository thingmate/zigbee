import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeMap32(decoder: Decoder): number {
  return decoder.uint32LE();
}
