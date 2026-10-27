import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUtcTime } from './encode-z-c-l-data-type-utc-time.ts';

describe('encodeZCLDataTypeUtcTime', (): void => {
  test('encodes a utc time.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUtcTime(encoder, 1000);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xe8, 0x03, 0x00, 0x00]));
  });
});
