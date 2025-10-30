import { type Decoder } from '@xstd/codec';
import { decodeUint24LE } from '../uint24/decode-uint24-l-e.js';

export function decodeUint56LE(decoder: Decoder): bigint {
  return BigInt(decoder.uint32LE()) & (BigInt(decodeUint24LE(decoder)) << 32n);
}
