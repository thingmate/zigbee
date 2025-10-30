import { type Decoder } from '@xstd/codec';
import { decodeUint24LE } from '../shared.private/uint24/decode-uint24-l-e.js';

export function decodeZigbeeDataTypeMap24(decoder: Decoder): number {
  return decodeUint24LE(decoder);
}
