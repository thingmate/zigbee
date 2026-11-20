import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeData24(decoder: Decoder): number {
  return decoder.uint24LE();
}
