import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUint64 } from './encode-z-c-l-data-type-uint64.ts';

describe('encodeZCLDataTypeUint64', (): void => {
  test('encodes 0x0123456789abcdefn.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint64(encoder, 0x0123456789abcdefn);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01]),
    );
  });

  test('encodes 18446744073709551615n.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint64(encoder, 18446744073709551615n);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
    );
  });
});
