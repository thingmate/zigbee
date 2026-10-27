import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeMap8(decoder: Decoder): number {
  return decoder.uint8();
}
