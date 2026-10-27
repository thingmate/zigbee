import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeData40 } from './decode-z-c-l-data-type-data40.ts';

describe('decodeZCLDataTypeData40', (): void => {
  test('decodes 0x123456789a.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x9a, 0x78, 0x56, 0x34, 0x12]), decodeZCLDataTypeData40),
    ).toBe(0x123456789a);
  });
});
