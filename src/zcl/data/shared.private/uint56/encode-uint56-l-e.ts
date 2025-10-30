import { type Encoder } from '@xstd/codec';
import { encodeUint24LE } from '../uint24/encode-uint24-l-e.js';

export function encodeUint56LE(encoder: Encoder, input: bigint | number): void {
  encoder.uint32LE(Number(input) & 0xffff_ffff);
  encodeUint24LE(encoder, Number((BigInt(input) << 32n) & 0xff_ffffn));
}
