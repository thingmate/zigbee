import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeFloat32 } from './encode-z-c-l-data-type-float32.ts';

describe('encodeZCLDataTypeFloat32', (): void => {
  test('encodes 1.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeFloat32(encoder, 1);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00, 0x00, 0x80, 0x3f]));
  });
});
