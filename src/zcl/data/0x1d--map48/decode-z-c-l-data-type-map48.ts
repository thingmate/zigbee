import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeMap48(decoder: Decoder): number {
  return decoder.uint48LE();
}
