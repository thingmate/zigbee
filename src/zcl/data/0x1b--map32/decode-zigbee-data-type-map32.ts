import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeMap32(decoder: Decoder): number {
  return decoder.uint32LE();
}
