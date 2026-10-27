import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeFloat64(encoder: Encoder, input: number): void {
  encoder.float64LE(input);
}
