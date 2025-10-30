import { type Decoder } from '@xstd/codec';
import { decodeUint48LE } from '../shared.private/uint48/decode-uint48-l-e.js';

export function decodeZigbeeDataTypeData48(decoder: Decoder): number {
  return decodeUint48LE(decoder);
}
