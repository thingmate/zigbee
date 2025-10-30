import { type Encoder } from '@xstd/codec';
import { encodeUint24LE } from '../uint24/encode-uint24-l-e.js';

export function encodeInt24LE(encoder: Encoder, input: number): void {
  encodeUint24LE(encoder, input < 0 ? input + 0x1_000_000 : input);
}
