import { type Decoder } from '@xstd/codec';
import { decodeUint40LE } from '../__shared__/uint40/decode-uint40-l-e.js';

export function decodeZigbeeDataTypeUint40(decoder: Decoder): number {
  return decodeUint40LE(decoder);
}
