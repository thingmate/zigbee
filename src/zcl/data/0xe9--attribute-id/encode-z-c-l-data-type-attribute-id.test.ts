import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeAttributeId } from './encode-z-c-l-data-type-attribute-id.ts';

describe('encodeZCLDataTypeAttributeId', (): void => {
  test('encodes 0x01.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeAttributeId(encoder, 0x01);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x01, 0x00]));
  });
});
