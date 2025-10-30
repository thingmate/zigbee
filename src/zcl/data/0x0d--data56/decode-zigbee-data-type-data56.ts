import { type Decoder } from '@xstd/codec';
import { decodeUint56LE } from '../__shared__/uint56/decode-uint56-l-e.js';

export function decodeZigbeeDataTypeData56(decoder: Decoder): bigint {
  return decodeUint56LE(decoder);
}
