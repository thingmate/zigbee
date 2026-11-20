import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt40(encoder: Encoder, input: number): void {
  encoder.int40LE(input);
}
