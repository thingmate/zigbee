import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeMap56 } from './decode-z-c-l-data-type-map56.ts';

describe('decodeZCLDataTypeMap56', (): void => {
  test('decodes 0x123456789abcden.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xde, 0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]),
        decodeZCLDataTypeMap56,
      ),
    ).toBe(0x123456789abcden);
  });
});
