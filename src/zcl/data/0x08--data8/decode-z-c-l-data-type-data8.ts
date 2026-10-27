import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeData8(decoder: Decoder): number {
  return decoder.uint8();
}
