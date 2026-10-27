import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeData48 } from './decode-z-c-l-data-type-data48.ts';

describe('decodeZCLDataTypeData48', (): void => {
  test('decodes 0x123456789abc.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]), decodeZCLDataTypeData48),
    ).toBe(0x123456789abc);
  });
});
