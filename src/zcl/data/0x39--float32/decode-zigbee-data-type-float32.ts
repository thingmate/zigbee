import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeFloat32(decoder: Decoder): number {
  return decoder.float32LE();
}
