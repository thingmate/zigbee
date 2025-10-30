import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeString(encoder: Encoder, input: string): void {
  const bytes: Uint8Array = new TextEncoder().encode(input);
  if (bytes.length >= 0xff) {
    throw new Error('String length excess 254.');
  }
  encoder.uint8(bytes.length).bytes(bytes);
}
