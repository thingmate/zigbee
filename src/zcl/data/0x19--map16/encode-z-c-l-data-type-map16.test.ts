import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeMap16 } from './encode-z-c-l-data-type-map16.ts';

describe('encodeZCLDataTypeMap16', (): void => {
  test('encodes 0x1234.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeMap16(encoder, 0x1234);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x34, 0x12]));
  });
});
