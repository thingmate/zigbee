import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeMap40(encoder: Encoder, input: number): void {
  encoder.uint40LE(input);
}
