import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeFloat16 } from './encode-z-c-l-data-type-float16.ts';

describe('encodeZCLDataTypeFloat16', (): void => {
  test('encodes 1.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeFloat16(encoder, 1);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00, 0x3c]));
  });
});
