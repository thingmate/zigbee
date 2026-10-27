import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeFloat64 } from './encode-z-c-l-data-type-float64.ts';

describe('encodeZCLDataTypeFloat64', (): void => {
  test('encodes 1.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeFloat64(encoder, 1);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf0, 0x3f]),
    );
  });
});
