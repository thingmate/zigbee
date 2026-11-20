import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeData48(encoder: Encoder, input: number): void {
  encoder.uint48LE(input);
}
