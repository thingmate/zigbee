import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeInt16 } from './encode-z-c-l-data-type-int16.ts';

describe('encodeZCLDataTypeInt16', (): void => {
  test('encodes -32768.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt16(encoder, -32768);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00, 0x80]));
  });

  test('encodes 32767.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt16(encoder, 32767);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0x7f]));
  });
});
