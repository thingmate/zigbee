import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeLongString } from './decode-z-c-l-data-type-long-string.ts';

describe('decodeZCLDataTypeLongString', (): void => {
  test('decodes an empty long string.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00, 0x00]), decodeZCLDataTypeLongString)).toBe('');
  });

  test('decodes a long string.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x03, 0x00, 0x61, 0x62, 0x63]), decodeZCLDataTypeLongString),
    ).toBe('abc');
  });

  test('throws on an invalid length of 0xffff.', (): void => {
    expect((): void => {
      Decoder.decode(new Uint8Array([0xff, 0xff]), decodeZCLDataTypeLongString);
    }).toThrow('Invalid long string');
  });
});
