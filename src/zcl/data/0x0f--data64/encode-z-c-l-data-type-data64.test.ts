import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeData64 } from './encode-z-c-l-data-type-data64.ts';

describe('encodeZCLDataTypeData64', (): void => {
  test('encodes 0x0123456789abcdefn.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeData64(encoder, 0x0123456789abcdefn);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0xef, 0xcd, 0xab, 0x89, 0x67, 0x45, 0x23, 0x01]),
    );
  });
});
