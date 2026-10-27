import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeLongOctetString } from './decode-z-c-l-data-type-long-octet-string.ts';

describe('decodeZCLDataTypeLongOctetString', (): void => {
  test('decodes an empty long octet string.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00, 0x00]), decodeZCLDataTypeLongOctetString)).toEqual(
      new Uint8Array([]),
    );
  });

  test('decodes a long octet string.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x03, 0x00, 0x61, 0x62, 0x63]),
        decodeZCLDataTypeLongOctetString,
      ),
    ).toEqual(new Uint8Array([0x61, 0x62, 0x63]));
  });

  test('throws on an invalid length of 0xffff.', (): void => {
    expect((): void => {
      Decoder.decode(new Uint8Array([0xff, 0xff]), decodeZCLDataTypeLongOctetString);
    }).toThrow('Invalid long octet string');
  });
});
