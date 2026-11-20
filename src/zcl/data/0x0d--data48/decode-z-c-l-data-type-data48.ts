import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeData48(decoder: Decoder): number {
  return decoder.uint48LE();
}
