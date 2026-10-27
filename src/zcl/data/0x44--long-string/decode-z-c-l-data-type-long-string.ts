import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeLongString(decoder: Decoder): string {
  const length: number = decoder.uint16LE();
  if (length === 0xffff) {
    throw new Error('Invalid long string');
  }
  return new TextDecoder().decode(decoder.bytes(length));
}
