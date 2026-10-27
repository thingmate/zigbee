import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeInt40 } from './decode-z-c-l-data-type-int40.ts';

describe('decodeZCLDataTypeInt40', (): void => {
  test('decodes -549755813888.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x80]), decodeZCLDataTypeInt40),
    ).toBe(-549755813888);
  });

  test('decodes 549755813887.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0x7f]), decodeZCLDataTypeInt40),
    ).toBe(549755813887);
  });
});
