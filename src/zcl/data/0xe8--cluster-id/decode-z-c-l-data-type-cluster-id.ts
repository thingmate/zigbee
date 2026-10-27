import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeClusterId(decoder: Decoder): number {
  return decoder.uint16LE();
}
