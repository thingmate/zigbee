import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeLongOctetString(encoder: Encoder, input: Uint8Array): void {
  if (input.length >= 0xffff) {
    throw new Error('Long octet string length excess 65534.');
  }
  encoder.uint16LE(input.length).bytes(input);
}
