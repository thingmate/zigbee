import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeBacnetOid(encoder: Encoder, input: number): void {
  encoder.uint32LE(input);
}
