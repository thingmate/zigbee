import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeInt8(decoder: Decoder): number {
  return decoder.int8();
}
