import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeAttributeId(encoder: Encoder, input: number): void {
  encoder.uint16LE(input);
}
