import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeString } from './encode-z-c-l-data-type-string.ts';

describe('encodeZCLDataTypeString', (): void => {
  test('encodes a string.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeString(encoder, 'abc');
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x03, 0x61, 0x62, 0x63]));
  });

  test('encodes a utf-8 string.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeString(encoder, 'é');
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x02, 0xc3, 0xa9]));
  });

  test('encodes a string of 254 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeString(encoder, 'a'.repeat(254));
    const expected: Uint8Array = new Uint8Array(255);
    expected[0] = 0xfe;
    expected.fill(0x61, 1);
    expect(encoder.toUint8Array()).toEqual(expected);
  });

  test('throws on a string of 255 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    expect((): void => {
      encodeZCLDataTypeString(encoder, 'a'.repeat(255));
    }).toThrow('String length excess 254.');
  });
});
