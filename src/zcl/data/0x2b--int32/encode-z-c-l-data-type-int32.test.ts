import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeInt32 } from './encode-z-c-l-data-type-int32.ts';

describe('encodeZCLDataTypeInt32', (): void => {
  test('encodes -2147483648.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt32(encoder, -2147483648);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00, 0x00, 0x00, 0x80]));
  });

  test('encodes 2147483647.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt32(encoder, 2147483647);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff, 0xff, 0x7f]));
  });
});
