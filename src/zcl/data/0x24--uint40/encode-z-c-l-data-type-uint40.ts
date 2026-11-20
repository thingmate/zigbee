import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeUint40(encoder: Encoder, input: number): void {
  encoder.uint40LE(input);
}
