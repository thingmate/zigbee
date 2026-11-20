import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt48(encoder: Encoder, input: number): void {
  encoder.int48LE(input);
}
