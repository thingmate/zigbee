import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeMap64 } from './decode-z-c-l-data-type-map64.ts';

describe('decodeZCLDataTypeMap64', (): void => {
  test('decodes 0x0123456789abcdefn.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01]),
        decodeZCLDataTypeMap64,
      ),
    ).toBe(0x0123456789abcdefn);
  });
});
