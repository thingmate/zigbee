import { type Decoder } from '@xstd/codec';
import { decodeUint56LE } from '../shared.private/uint56/decode-uint56-l-e.js';

export function decodeZigbeeDataTypeMap56(decoder: Decoder): bigint {
  return decodeUint56LE(decoder);
}
