import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeOctetString(decoder: Decoder): Uint8Array {
  const length: number = decoder.uint8();
  if (length === 0xff) {
    throw new Error('Invalid octet string');
  }
  return decoder.bytes(length);
}
