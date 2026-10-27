import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeMap16(decoder: Decoder): number {
  return decoder.uint16LE();
}
