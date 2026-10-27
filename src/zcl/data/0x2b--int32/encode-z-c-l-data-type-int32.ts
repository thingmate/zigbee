import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt32(encoder: Encoder, input: number): void {
  encoder.int32LE(input);
}
