import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeAttributeId(decoder: Decoder): number {
  return decoder.uint16LE();
}
