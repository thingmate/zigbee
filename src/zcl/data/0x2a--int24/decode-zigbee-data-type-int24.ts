import { type Decoder } from '@xstd/codec';
import { decodeInt24LE } from '../shared.private/int24/decode-int24-l-e.js';

export function decodeZigbeeDataTypeInt24(decoder: Decoder): number {
  return decodeInt24LE(decoder);
}
