import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeData32 } from './encode-z-c-l-data-type-data32.ts';

describe('encodeZCLDataTypeData32', (): void => {
  test('encodes 0x12345678.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeData32(encoder, 0x12345678);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x78, 0x56, 0x34, 0x12]));
  });
});
