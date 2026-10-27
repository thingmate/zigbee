import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeInt32 } from './decode-z-c-l-data-type-int32.ts';

describe('decodeZCLDataTypeInt32', (): void => {
  test('decodes -2147483648.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00, 0x00, 0x00, 0x80]), decodeZCLDataTypeInt32)).toBe(
      -2147483648,
    );
  });

  test('decodes 2147483647.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xff, 0xff, 0xff, 0x7f]), decodeZCLDataTypeInt32)).toBe(
      2147483647,
    );
  });
});
