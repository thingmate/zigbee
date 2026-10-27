import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeLongOctetString(decoder: Decoder): Uint8Array {
  const length: number = decoder.uint16LE();
  if (length === 0xffff) {
    throw new Error('Invalid long octet string');
  }
  return decoder.bytes(length);
}
