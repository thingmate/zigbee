import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeMap24 } from './encode-z-c-l-data-type-map24.ts';

describe('encodeZCLDataTypeMap24', (): void => {
  test('encodes 0x123456.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeMap24(encoder, 0x123456);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x56, 0x34, 0x12]));
  });
});
