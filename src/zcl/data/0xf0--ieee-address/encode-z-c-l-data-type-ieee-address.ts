import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeIeeeAddress(encoder: Encoder, input: bigint | number): void {
  encoder.uint64LE(input);
}
