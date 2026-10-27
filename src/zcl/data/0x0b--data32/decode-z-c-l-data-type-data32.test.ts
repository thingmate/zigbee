import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeData32 } from './decode-z-c-l-data-type-data32.ts';

describe('decodeZCLDataTypeData32', (): void => {
  test('decodes 0x12345678.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x78, 0x56, 0x34, 0x12]), decodeZCLDataTypeData32)).toBe(
      0x12345678,
    );
  });
});
