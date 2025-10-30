import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeString(decoder: Decoder): string {
  const length: number = decoder.uint8();
  if (length === 0xff) {
    throw new Error('Invalid string');
  }
  return new TextDecoder().decode(decoder.bytes(length));
}
