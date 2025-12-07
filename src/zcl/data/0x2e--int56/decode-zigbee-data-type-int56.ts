import { type Decoder, decodeInt56LE } from '@xstd/codec';

export function decodeZigbeeDataTypeInt56(decoder: Decoder): bigint {
  return decodeInt56LE(decoder);
}
