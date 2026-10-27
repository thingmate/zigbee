import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeData56 } from './decode-z-c-l-data-type-data56.ts';

describe('decodeZCLDataTypeData56', (): void => {
  test('decodes 0x123456789abcden.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xde, 0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]),
        decodeZCLDataTypeData56,
      ),
    ).toBe(0x123456789abcden);
  });
});
