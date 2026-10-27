import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUint48 } from './decode-z-c-l-data-type-uint48.ts';

describe('decodeZCLDataTypeUint48', (): void => {
  test('decodes 0x123456789abc.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]), decodeZCLDataTypeUint48),
    ).toBe(0x123456789abc);
  });

  test('decodes 281474976710655.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff]), decodeZCLDataTypeUint48),
    ).toBe(281474976710655);
  });
});
