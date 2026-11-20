import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeData56(encoder: Encoder, input: bigint | number): void {
  encoder.uint56LE(input);
}
