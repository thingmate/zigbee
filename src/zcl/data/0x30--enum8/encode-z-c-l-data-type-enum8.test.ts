import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeEnum8 } from './encode-z-c-l-data-type-enum8.ts';

describe('encodeZCLDataTypeEnum8', (): void => {
  test('encodes 0x03.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeEnum8(encoder, 0x03);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x03]));
  });
});
