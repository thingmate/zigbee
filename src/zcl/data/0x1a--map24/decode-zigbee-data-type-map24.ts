import { type Decoder, decodeUint24LE } from '@xstd/codec';

export function decodeZigbeeDataTypeMap24(decoder: Decoder): number {
  return decodeUint24LE(decoder);
}
