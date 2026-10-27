import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt8(encoder: Encoder, input: number): void {
  encoder.int8(input);
}
