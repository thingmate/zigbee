import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeMap40(decoder: Decoder): number {
  return decoder.uint40LE();
}
