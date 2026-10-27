import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeData24 } from './encode-z-c-l-data-type-data24.ts';

describe('encodeZCLDataTypeData24', (): void => {
  test('encodes 0x123456.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeData24(encoder, 0x123456);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x56, 0x34, 0x12]));
  });
});
