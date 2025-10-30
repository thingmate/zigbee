import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeInt32(decoder: Decoder): number {
  return decoder.int32LE();
}
