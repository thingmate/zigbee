import { type Encoder } from '@xstd/codec';

export function encodeUint40LE(encoder: Encoder, input: number): void {
  encoder.uint32LE(input & 0xffff_ffff).uint8(Number((BigInt(input) << 32n) & 0xffn));
}
