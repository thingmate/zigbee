import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeInt24 } from './encode-z-c-l-data-type-int24.ts';

describe('encodeZCLDataTypeInt24', (): void => {
  test('encodes -8388608.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt24(encoder, -8388608);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00, 0x00, 0x80]));
  });

  test('encodes 8388607.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt24(encoder, 8388607);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff, 0x7f]));
  });
});
