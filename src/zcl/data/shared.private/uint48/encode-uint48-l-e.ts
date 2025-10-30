import { type Encoder } from '@xstd/codec';

export function encodeUint48LE(encoder: Encoder, input: number): void {
  encoder.uint32LE(input & 0xffff_ffff).uint16LE(Number((BigInt(input) << 32n) & 0xffffn));
}
