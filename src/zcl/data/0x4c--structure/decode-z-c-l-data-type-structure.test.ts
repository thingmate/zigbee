import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeStructure } from './decode-z-c-l-data-type-structure.ts';

describe('decodeZCLDataTypeStructure', (): void => {
  test('decodes a structure.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x02, 0x00, 0x20, 0x05, 0x10, 0x01]),
        decodeZCLDataTypeStructure,
      ),
    ).toEqual({
      fields: [
        { dataType: 0x20, value: 5 },
        { dataType: 0x10, value: true },
      ],
    });
  });

  test('decodes an empty structure.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00, 0x00]), decodeZCLDataTypeStructure)).toEqual({
      fields: [],
    });
  });

  test('throws on an invalid field count of 0xffff.', (): void => {
    expect((): void => {
      Decoder.decode(new Uint8Array([0xff, 0xff]), decodeZCLDataTypeStructure);
    }).toThrow('Invalid structure');
  });
});
