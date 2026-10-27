import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeData24 } from './decode-z-c-l-data-type-data24.ts';

describe('decodeZCLDataTypeData24', (): void => {
  test('decodes 0x123456.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x56, 0x34, 0x12]), decodeZCLDataTypeData24)).toBe(
      0x123456,
    );
  });
});
