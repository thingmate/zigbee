import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUint56 } from './encode-z-c-l-data-type-uint56.ts';

describe('encodeZCLDataTypeUint56', (): void => {
  test('encodes 0x123456789abcden.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint56(encoder, 0x123456789abcden);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0xde, 0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]),
    );
  });

  test('encodes 72057594037927935n.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint56(encoder, 72057594037927935n);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
    );
  });
});
