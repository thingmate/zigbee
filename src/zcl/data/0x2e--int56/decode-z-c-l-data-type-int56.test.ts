import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeInt56 } from './decode-z-c-l-data-type-int56.ts';

describe('decodeZCLDataTypeInt56', (): void => {
  test('decodes -36028797018963968n.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80]),
        decodeZCLDataTypeInt56,
      ),
    ).toBe(-36028797018963968n);
  });

  test('decodes 36028797018963967n.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f]),
        decodeZCLDataTypeInt56,
      ),
    ).toBe(36028797018963967n);
  });
});
