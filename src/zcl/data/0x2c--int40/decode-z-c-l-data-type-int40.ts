import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt40(decoder: Decoder): number {
  return decoder.int40LE();
}
