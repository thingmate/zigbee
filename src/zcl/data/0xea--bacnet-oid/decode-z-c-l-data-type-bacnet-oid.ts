import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeBacnetOid(decoder: Decoder): number {
  return decoder.uint32LE();
}
