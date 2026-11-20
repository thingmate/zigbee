import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeUint24(encoder: Encoder, input: number): void {
  encoder.uint24LE(input);
}
