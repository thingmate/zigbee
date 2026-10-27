import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeLongOctetString } from './decode-z-c-l-data-type-long-octet-string.ts';
import { encodeZCLDataTypeLongOctetString } from './encode-z-c-l-data-type-long-octet-string.ts';

describe('encodeZCLDataTypeLongOctetString', (): void => {
  test('encodes a long octet string.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeLongOctetString(encoder, new Uint8Array([0x61, 0x62, 0x63]));
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x03, 0x00, 0x61, 0x62, 0x63]));
  });

  test('encodes a long octet string of 65534 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeLongOctetString(encoder, new Uint8Array(65534));
    const bytes: Uint8Array = encoder.toUint8Array();
    expect(bytes.length).toBe(65536);
    expect(bytes[0]).toBe(0xfe);
    expect(bytes[1]).toBe(0xff);
    expect(decodeZCLDataTypeLongOctetString(encoder.toDecoder())).toEqual(new Uint8Array(65534));
  });

  test('throws on a long octet string of 65535 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    expect((): void => {
      encodeZCLDataTypeLongOctetString(encoder, new Uint8Array(65535));
    }).toThrow('Long octet string length excess 65534.');
  });
});
