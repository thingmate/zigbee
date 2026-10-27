import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUint32 } from './encode-z-c-l-data-type-uint32.ts';

describe('encodeZCLDataTypeUint32', (): void => {
  test('encodes 0x12345678.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint32(encoder, 0x12345678);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x78, 0x56, 0x34, 0x12]));
  });

  test('encodes 4294967295.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint32(encoder, 4294967295);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff, 0xff, 0xff]));
  });
});
