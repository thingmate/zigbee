import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeFloat32(decoder: Decoder): number {
  return decoder.float32LE();
}
