import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeUtcTime(encoder: Encoder, input: number): void {
  encoder.uint32LE(input);
}
