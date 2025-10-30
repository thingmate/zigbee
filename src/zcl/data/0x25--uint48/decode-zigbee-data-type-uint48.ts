import { type Decoder } from '@xstd/codec';
import { decodeUint48LE } from '../__shared__/uint48/decode-uint48-l-e.js';

export function decodeZigbeeDataTypeUint48(decoder: Decoder): number {
  return decodeUint48LE(decoder);
}
