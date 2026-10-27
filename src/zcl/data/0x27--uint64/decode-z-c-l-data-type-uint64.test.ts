import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUint64 } from './decode-z-c-l-data-type-uint64.ts';

describe('decodeZCLDataTypeUint64', (): void => {
  test('decodes 0x0123456789abcdefn.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01]),
        decodeZCLDataTypeUint64,
      ),
    ).toBe(0x0123456789abcdefn);
  });

  test('decodes 18446744073709551615n.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
        decodeZCLDataTypeUint64,
      ),
    ).toBe(18446744073709551615n);
  });
});
