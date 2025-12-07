import { type Decoder, decodeInt24LE } from '@xstd/codec';

export function decodeZigbeeDataTypeInt24(decoder: Decoder): number {
  return decodeInt24LE(decoder);
}
