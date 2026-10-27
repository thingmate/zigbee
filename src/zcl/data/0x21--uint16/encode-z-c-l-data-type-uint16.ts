import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeUint16(encoder: Encoder, input: number): void {
  encoder.uint16LE(input);
}
