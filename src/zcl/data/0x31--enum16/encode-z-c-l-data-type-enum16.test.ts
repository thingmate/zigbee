import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeEnum16 } from './encode-z-c-l-data-type-enum16.ts';

describe('encodeZCLDataTypeEnum16', (): void => {
  test('encodes 0x03.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeEnum16(encoder, 0x03);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x03, 0x00]));
  });
});
