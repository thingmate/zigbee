import { type Decoder, decodeInt40LE } from '@xstd/codec';

export function decodeZigbeeDataTypeInt40(decoder: Decoder): number {
  return decodeInt40LE(decoder);
}
