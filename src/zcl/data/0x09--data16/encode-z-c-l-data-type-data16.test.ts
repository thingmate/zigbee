import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeData16 } from './encode-z-c-l-data-type-data16.ts';

describe('encodeZCLDataTypeData16', (): void => {
  test('encodes 0xabcd.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeData16(encoder, 0xabcd);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xcd, 0xab]));
  });
});
