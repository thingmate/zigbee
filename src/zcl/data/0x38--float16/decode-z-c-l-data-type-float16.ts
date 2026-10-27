import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeFloat16(decoder: Decoder): number {
  return decoder.float16LE();
}
