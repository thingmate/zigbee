import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUint32 } from './decode-z-c-l-data-type-uint32.ts';

describe('decodeZCLDataTypeUint32', (): void => {
  test('decodes 0x12345678.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x78, 0x56, 0x34, 0x12]), decodeZCLDataTypeUint32)).toBe(
      0x12345678,
    );
  });

  test('decodes 4294967295.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xff, 0xff, 0xff, 0xff]), decodeZCLDataTypeUint32)).toBe(
      4294967295,
    );
  });
});
