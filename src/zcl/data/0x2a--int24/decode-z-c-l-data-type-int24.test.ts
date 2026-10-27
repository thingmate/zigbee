import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeInt24 } from './decode-z-c-l-data-type-int24.ts';

describe('decodeZCLDataTypeInt24', (): void => {
  test('decodes -8388608.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00, 0x00, 0x80]), decodeZCLDataTypeInt24)).toBe(
      -8388608,
    );
  });

  test('decodes 8388607.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xff, 0xff, 0x7f]), decodeZCLDataTypeInt24)).toBe(
      8388607,
    );
  });
});
