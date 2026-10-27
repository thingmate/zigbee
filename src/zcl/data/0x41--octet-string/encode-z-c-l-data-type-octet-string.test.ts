import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeOctetString } from './encode-z-c-l-data-type-octet-string.ts';

describe('encodeZCLDataTypeOctetString', (): void => {
  test('encodes an octet string.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeOctetString(encoder, new Uint8Array([0x61, 0x62, 0x63]));
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x03, 0x61, 0x62, 0x63]));
  });

  test('encodes an octet string of 254 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeOctetString(encoder, new Uint8Array(254));
    const expected: Uint8Array = new Uint8Array(255);
    expected[0] = 0xfe;
    expect(encoder.toUint8Array()).toEqual(expected);
  });

  test('throws on an octet string of 255 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    expect((): void => {
      encodeZCLDataTypeOctetString(encoder, new Uint8Array(255));
    }).toThrow('Octet string length excess 254.');
  });
});
