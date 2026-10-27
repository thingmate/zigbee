import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt64(encoder: Encoder, input: bigint | number): void {
  encoder.int64LE(input);
}
