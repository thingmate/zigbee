import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeData16(encoder: Encoder, input: number): void {
  encoder.uint16LE(input);
}
