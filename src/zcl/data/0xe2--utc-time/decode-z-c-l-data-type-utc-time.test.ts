import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUtcTime } from './decode-z-c-l-data-type-utc-time.ts';

describe('decodeZCLDataTypeUtcTime', (): void => {
  test('decodes a utc time.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xe8, 0x03, 0x00, 0x00]), decodeZCLDataTypeUtcTime)).toBe(
      1000,
    );
  });
});
