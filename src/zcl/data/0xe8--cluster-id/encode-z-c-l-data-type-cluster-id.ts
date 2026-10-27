import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeClusterId(encoder: Encoder, input: number): void {
  encoder.uint16LE(input);
}
