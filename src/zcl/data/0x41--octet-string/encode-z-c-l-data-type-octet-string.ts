import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeOctetString(encoder: Encoder, input: Uint8Array): void {
  if (input.length >= 0xff) {
    throw new Error('Octet string length excess 254.');
  }
  encoder.uint8(input.length).bytes(input);
}
