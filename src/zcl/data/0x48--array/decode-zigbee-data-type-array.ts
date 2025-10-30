import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeArray(decoder: Decoder): ZigbeeDataTypeArray {
  const length: number /* u16 */ = decoder.uint16LE();
  if (length === 0xff) {
    throw new Error('Invalid array');
  }
  return {
    length,
    data: decoder.bytes(length),
  };
}

export interface ZigbeeDataTypeArray {
  readonly length: number;
  readonly data: Uint8Array;
}
