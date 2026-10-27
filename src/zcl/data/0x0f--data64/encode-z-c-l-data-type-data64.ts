import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeData64(encoder: Encoder, input: bigint | number): void {
  encoder.uint64LE(input);
}
