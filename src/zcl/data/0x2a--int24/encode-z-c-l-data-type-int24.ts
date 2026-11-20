import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt24(encoder: Encoder, input: number): void {
  encoder.int24LE(input);
}
