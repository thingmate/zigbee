import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeData40(decoder: Decoder): number {
  return decoder.uint40LE();
}
