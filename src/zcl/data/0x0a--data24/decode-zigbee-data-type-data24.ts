import { type Decoder } from '@xstd/codec';
import { decodeUint24LE } from '../__shared__/uint24/decode-uint24-l-e.js';

export function decodeZigbeeDataTypeData24(decoder: Decoder): number {
  return decodeUint24LE(decoder);
}
