import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeMap24 } from './decode-z-c-l-data-type-map24.ts';

describe('decodeZCLDataTypeMap24', (): void => {
  test('decodes 0x123456.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x56, 0x34, 0x12]), decodeZCLDataTypeMap24)).toBe(
      0x123456,
    );
  });
});
