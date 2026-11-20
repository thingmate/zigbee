import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeMap56(encoder: Encoder, input: bigint | number): void {
  encoder.uint56LE(input);
}
