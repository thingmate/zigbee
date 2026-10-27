import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeInt64 } from './decode-z-c-l-data-type-int64.ts';

describe('decodeZCLDataTypeInt64', (): void => {
  test('decodes -9223372036854775808n.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80]),
        decodeZCLDataTypeInt64,
      ),
    ).toBe(-9223372036854775808n);
  });

  test('decodes 9223372036854775807n.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f]),
        decodeZCLDataTypeInt64,
      ),
    ).toBe(9223372036854775807n);
  });
});
