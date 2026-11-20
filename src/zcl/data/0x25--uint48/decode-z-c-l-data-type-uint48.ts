import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeUint48(decoder: Decoder): number {
  return decoder.uint48LE();
}
