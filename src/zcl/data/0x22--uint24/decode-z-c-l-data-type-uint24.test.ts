import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUint24 } from './decode-z-c-l-data-type-uint24.ts';

describe('decodeZCLDataTypeUint24', (): void => {
  test('decodes 0x123456.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x56, 0x34, 0x12]), decodeZCLDataTypeUint24)).toBe(
      0x123456,
    );
  });

  test('decodes 16777215.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xff, 0xff, 0xff]), decodeZCLDataTypeUint24)).toBe(
      16777215,
    );
  });
});
