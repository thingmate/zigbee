import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeFloat64 } from './decode-z-c-l-data-type-float64.ts';

describe('decodeZCLDataTypeFloat64', (): void => {
  test('decodes 1.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f]),
        decodeZCLDataTypeFloat64,
      ),
    ).toBe(1);
  });
});
