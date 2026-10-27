import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeInt56 } from './encode-z-c-l-data-type-int56.ts';

describe('encodeZCLDataTypeInt56', (): void => {
  test('encodes -36028797018963968n.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt56(encoder, -36028797018963968n);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80]),
    );
  });

  test('encodes 36028797018963967n.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt56(encoder, 36028797018963967n);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f]),
    );
  });
});
