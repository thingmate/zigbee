import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeData16(decoder: Decoder): number {
  return decoder.uint16LE();
}
