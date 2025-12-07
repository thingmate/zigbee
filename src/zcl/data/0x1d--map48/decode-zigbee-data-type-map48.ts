import { type Decoder, decodeUint48LE } from '@xstd/codec';

export function decodeZigbeeDataTypeMap48(decoder: Decoder): number {
  return decodeUint48LE(decoder);
}
