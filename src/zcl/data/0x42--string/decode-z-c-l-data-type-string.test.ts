import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeString } from './decode-z-c-l-data-type-string.ts';

describe('decodeZCLDataTypeString', (): void => {
  test('decodes a string.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x03, 0x61, 0x62, 0x63]), decodeZCLDataTypeString)).toBe(
      'abc',
    );
  });

  test('decodes a utf-8 string.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x02, 0xc3, 0xa9]), decodeZCLDataTypeString)).toBe('é');
  });

  test('throws on an invalid length of 0xff.', (): void => {
    expect((): void => {
      Decoder.decode(new Uint8Array([0xff]), decodeZCLDataTypeString);
    }).toThrow('Invalid string');
  });
});
