import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeUint16(decoder: Decoder): number {
  return decoder.uint16LE();
}
