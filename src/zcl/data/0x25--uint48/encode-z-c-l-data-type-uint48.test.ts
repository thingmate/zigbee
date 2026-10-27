import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUint48 } from './encode-z-c-l-data-type-uint48.ts';

describe('encodeZCLDataTypeUint48', (): void => {
  test('encodes 0x123456789abc.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint48(encoder, 0x123456789abc);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]));
  });

  test('encodes 281474976710655.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint48(encoder, 281474976710655);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff]));
  });
});
