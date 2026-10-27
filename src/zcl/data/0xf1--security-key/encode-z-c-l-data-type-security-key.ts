import type { Encoder } from '@xstd/codec';

export function encodeZCLDataTypeSecurityKey(encoder: Encoder, input: Uint8Array): void {
  if (input.length !== 16) {
    throw new Error('Security key length must be 16.');
  }
  encoder.bytes(input);
}
