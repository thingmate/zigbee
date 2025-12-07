import { type Decoder, decodeUint24LE } from '@xstd/codec';

export function decodeZigbeeDataTypeData24(decoder: Decoder): number {
  return decodeUint24LE(decoder);
}
