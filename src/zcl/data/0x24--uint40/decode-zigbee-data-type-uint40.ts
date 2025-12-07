import { type Decoder, decodeUint40LE } from '@xstd/codec';

export function decodeZigbeeDataTypeUint40(decoder: Decoder): number {
  return decodeUint40LE(decoder);
}
