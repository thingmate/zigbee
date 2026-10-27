import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeOctetString } from './decode-z-c-l-data-type-octet-string.ts';

describe('decodeZCLDataTypeOctetString', (): void => {
  test('decodes an empty octet string.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00]), decodeZCLDataTypeOctetString)).toEqual(
      new Uint8Array([]),
    );
  });

  test('decodes an octet string.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x03, 0x61, 0x62, 0x63]), decodeZCLDataTypeOctetString),
    ).toEqual(new Uint8Array([0x61, 0x62, 0x63]));
  });

  test('throws on an invalid length of 0xff.', (): void => {
    expect((): void => {
      Decoder.decode(new Uint8Array([0xff]), decodeZCLDataTypeOctetString);
    }).toThrow('Invalid octet string');
  });
});
