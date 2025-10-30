import { type Decoder } from '@xstd/codec';
import { decodeUint40LE } from '../shared.private/uint40/decode-uint40-l-e.js';

export function decodeZigbeeDataTypeMap40(decoder: Decoder): number {
  return decodeUint40LE(decoder);
}
