import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeBoolean(encoder: Encoder, input: boolean): void {
  encoder.uint8(input ? 0x01 : 0x00);
}
