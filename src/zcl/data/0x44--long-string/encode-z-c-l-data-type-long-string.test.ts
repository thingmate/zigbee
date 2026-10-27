import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeLongString } from './decode-z-c-l-data-type-long-string.ts';
import { encodeZCLDataTypeLongString } from './encode-z-c-l-data-type-long-string.ts';

describe('encodeZCLDataTypeLongString', (): void => {
  test('encodes a long string.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeLongString(encoder, 'abc');
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x03, 0x00, 0x61, 0x62, 0x63]));
  });

  test('encodes a long string of 65534 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeLongString(encoder, 'a'.repeat(65534));
    const bytes: Uint8Array = encoder.toUint8Array();
    expect(bytes.length).toBe(65536);
    expect(bytes[0]).toBe(0xfe);
    expect(bytes[1]).toBe(0xff);
    expect(decodeZCLDataTypeLongString(encoder.toDecoder())).toBe('a'.repeat(65534));
  });

  test('throws on a long string of 65535 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    expect((): void => {
      encodeZCLDataTypeLongString(encoder, 'a'.repeat(65535));
    }).toThrow('Long string length excess 65534.');
  });
});
