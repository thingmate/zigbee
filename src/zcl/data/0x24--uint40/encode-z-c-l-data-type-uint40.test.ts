import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUint40 } from './encode-z-c-l-data-type-uint40.ts';

describe('encodeZCLDataTypeUint40', (): void => {
  test('encodes 0x123456789a.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint40(encoder, 0x123456789a);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x9a, 0x78, 0x56, 0x34, 0x12]));
  });

  test('encodes 1099511627775.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint40(encoder, 1099511627775);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff]));
  });
});
