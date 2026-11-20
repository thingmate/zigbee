import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeData40(encoder: Encoder, input: number): void {
  encoder.uint40LE(input);
}
