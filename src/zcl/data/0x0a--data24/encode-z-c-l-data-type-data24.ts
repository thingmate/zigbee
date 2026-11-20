import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeData24(encoder: Encoder, input: number): void {
  encoder.uint24LE(input);
}
