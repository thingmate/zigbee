import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeBoolean } from './encode-z-c-l-data-type-boolean.ts';

describe('encodeZCLDataTypeBoolean', (): void => {
  test('encodes true.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeBoolean(encoder, true);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x01]));
  });

  test('encodes false.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeBoolean(encoder, false);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00]));
  });
});
