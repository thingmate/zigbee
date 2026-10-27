import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeLongString(encoder: Encoder, input: string): void {
  const bytes: Uint8Array = new TextEncoder().encode(input);
  if (bytes.length >= 0xffff) {
    throw new Error('Long string length excess 65534.');
  }
  encoder.uint16LE(bytes.length).bytes(bytes);
}
