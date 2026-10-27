import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeEnum16(decoder: Decoder): number {
  return decoder.uint16LE();
}
