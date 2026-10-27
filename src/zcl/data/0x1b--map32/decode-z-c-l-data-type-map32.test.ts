import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeMap32 } from './decode-z-c-l-data-type-map32.ts';

describe('decodeZCLDataTypeMap32', (): void => {
  test('decodes 0x12345678.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x78, 0x56, 0x34, 0x12]), decodeZCLDataTypeMap32)).toBe(
      0x12345678,
    );
  });
});
