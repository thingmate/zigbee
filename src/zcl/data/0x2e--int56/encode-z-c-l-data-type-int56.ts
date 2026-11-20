import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt56(encoder: Encoder, input: bigint | number): void {
  encoder.int56LE(input);
}
