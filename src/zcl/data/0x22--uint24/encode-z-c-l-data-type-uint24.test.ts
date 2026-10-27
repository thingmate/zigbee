import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUint24 } from './encode-z-c-l-data-type-uint24.ts';

describe('encodeZCLDataTypeUint24', (): void => {
  test('encodes 0x123456.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint24(encoder, 0x123456);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x56, 0x34, 0x12]));
  });

  test('encodes 16777215.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint24(encoder, 16777215);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff, 0xff]));
  });
});
