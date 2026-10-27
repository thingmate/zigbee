import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeUtcTime(decoder: Decoder): number {
  return decoder.uint32LE();
}
