import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeData48 } from './encode-z-c-l-data-type-data48.ts';

describe('encodeZCLDataTypeData48', (): void => {
  test('encodes 0x123456789abc.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeData48(encoder, 0x123456789abc);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xbc, 0x9a, 0x78, 0x56, 0x34, 0x12]));
  });
});
