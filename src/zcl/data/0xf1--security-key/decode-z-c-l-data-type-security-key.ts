import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeSecurityKey(decoder: Decoder): Uint8Array {
  return decoder.bytes(16);
}
