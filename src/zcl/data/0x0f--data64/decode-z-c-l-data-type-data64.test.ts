import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeData64 } from './decode-z-c-l-data-type-data64.ts';

describe('decodeZCLDataTypeData64', (): void => {
  test('decodes 0x0123456789abcdefn.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01]),
        decodeZCLDataTypeData64,
      ),
    ).toBe(0x0123456789abcdefn);
  });
});
