import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt8(decoder: Decoder): number {
  return decoder.int8();
}
