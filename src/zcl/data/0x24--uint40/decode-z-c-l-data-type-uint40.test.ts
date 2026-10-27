import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUint40 } from './decode-z-c-l-data-type-uint40.ts';

describe('decodeZCLDataTypeUint40', (): void => {
  test('decodes 0x123456789a.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x9a, 0x78, 0x56, 0x34, 0x12]), decodeZCLDataTypeUint40),
    ).toBe(0x123456789a);
  });

  test('decodes 1099511627775.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff]), decodeZCLDataTypeUint40),
    ).toBe(1099511627775);
  });
});
