import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeData32(decoder: Decoder): number {
  return decoder.uint32LE();
}
