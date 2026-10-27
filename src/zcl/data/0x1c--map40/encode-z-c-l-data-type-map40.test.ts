import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeMap40 } from './encode-z-c-l-data-type-map40.ts';

describe('encodeZCLDataTypeMap40', (): void => {
  test('encodes 0x123456789a.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeMap40(encoder, 0x123456789a);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x9a, 0x78, 0x56, 0x34, 0x12]));
  });
});
