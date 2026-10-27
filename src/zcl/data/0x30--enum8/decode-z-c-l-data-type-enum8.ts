import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeEnum8(decoder: Decoder): number {
  return decoder.uint8();
}
