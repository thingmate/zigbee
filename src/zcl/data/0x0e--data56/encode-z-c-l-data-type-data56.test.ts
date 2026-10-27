import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeData56 } from './encode-z-c-l-data-type-data56.ts';

describe('encodeZCLDataTypeData56', (): void => {
  test('encodes 0x123456789abcden.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeData56(encoder, 0x123456789abcden);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0xde, 0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]),
    );
  });
});
