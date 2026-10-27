import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeSet } from './decode-z-c-l-data-type-set.ts';

describe('decodeZCLDataTypeSet', (): void => {
  test('decodes a set like an array.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x20, 0x02, 0x00, 0x05, 0x07]), decodeZCLDataTypeSet),
    ).toEqual({ elementType: 0x20, values: [5, 7] });
  });
});
