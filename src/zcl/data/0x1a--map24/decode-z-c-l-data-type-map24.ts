import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeMap24(decoder: Decoder): number {
  return decoder.uint24LE();
}
