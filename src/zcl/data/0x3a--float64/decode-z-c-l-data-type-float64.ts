import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeFloat64(decoder: Decoder): number {
  return decoder.float64LE();
}
