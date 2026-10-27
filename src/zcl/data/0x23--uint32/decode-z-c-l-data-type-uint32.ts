import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeUint32(decoder: Decoder): number {
  return decoder.uint32LE();
}
