import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUint56 } from './decode-z-c-l-data-type-uint56.ts';

describe('decodeZCLDataTypeUint56', (): void => {
  test('decodes 0x123456789abcden.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xde, 0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]),
        decodeZCLDataTypeUint56,
      ),
    ).toBe(0x123456789abcden);
  });

  test('decodes 72057594037927935n.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
        decodeZCLDataTypeUint56,
      ),
    ).toBe(72057594037927935n);
  });
});
