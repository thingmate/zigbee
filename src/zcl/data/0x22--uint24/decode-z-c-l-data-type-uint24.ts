import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeUint24(decoder: Decoder): number {
  return decoder.uint24LE();
}
