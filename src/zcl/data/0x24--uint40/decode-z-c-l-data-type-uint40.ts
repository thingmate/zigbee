import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeUint40(decoder: Decoder): number {
  return decoder.uint40LE();
}
