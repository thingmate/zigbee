import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeArray } from './decode-z-c-l-data-type-array.ts';

describe('decodeZCLDataTypeArray', (): void => {
  test('decodes an array.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x20, 0x02, 0x00, 0x05, 0x07]), decodeZCLDataTypeArray),
    ).toEqual({ elementType: 0x20, values: [5, 7] });
  });

  test('decodes an empty array.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x20, 0x00, 0x00]), decodeZCLDataTypeArray)).toEqual({
      elementType: 0x20,
      values: [],
    });
  });

  test('throws on an invalid element count of 0xffff.', (): void => {
    expect((): void => {
      Decoder.decode(new Uint8Array([0x20, 0xff, 0xff]), decodeZCLDataTypeArray);
    }).toThrow('Invalid array');
  });
});
