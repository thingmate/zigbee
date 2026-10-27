import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUint8 } from './encode-z-c-l-data-type-uint8.ts';

describe('encodeZCLDataTypeUint8', (): void => {
  test('encodes 0x2a.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint8(encoder, 0x2a);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x2a]));
  });

  test('encodes 255.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint8(encoder, 255);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff]));
  });
});
