import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeUint32(encoder: Encoder, input: number): void {
  encoder.uint32LE(input);
}
