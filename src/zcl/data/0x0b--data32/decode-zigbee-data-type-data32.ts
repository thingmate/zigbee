import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeData32(decoder: Decoder): number {
  return decoder.uint32LE();
}
