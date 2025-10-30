import { type Decoder } from '@xstd/codec';
import { decodeUint24LE } from '../uint24/decode-uint24-l-e.js';

export function decodeInt24LE(decoder: Decoder): number {
  const value: number = decodeUint24LE(decoder);
  return value < 0x1_000_000 ? value : value - 0x1_000_000;
}
