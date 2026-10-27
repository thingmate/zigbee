import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeBag } from './decode-z-c-l-data-type-bag.ts';

describe('decodeZCLDataTypeBag', (): void => {
  test('decodes a bag like an array.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x20, 0x02, 0x00, 0x05, 0x07]), decodeZCLDataTypeBag),
    ).toEqual({ elementType: 0x20, values: [5, 7] });
  });
});
