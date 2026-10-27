import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeUint16 } from './encode-z-c-l-data-type-uint16.ts';

describe('encodeZCLDataTypeUint16', (): void => {
  test('encodes 0x1234.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint16(encoder, 0x1234);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x34, 0x12]));
  });

  test('encodes 65535.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeUint16(encoder, 65535);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff]));
  });
});
