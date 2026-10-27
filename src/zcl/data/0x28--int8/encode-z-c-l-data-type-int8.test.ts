import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeInt8 } from './encode-z-c-l-data-type-int8.ts';

describe('encodeZCLDataTypeInt8', (): void => {
  test('encodes -128.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt8(encoder, -128);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x80]));
  });

  test('encodes 127.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt8(encoder, 127);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x7f]));
  });
});
