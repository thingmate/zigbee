import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeSet } from './encode-z-c-l-data-type-set.ts';

describe('encodeZCLDataTypeSet', (): void => {
  test('encodes a set like an array.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeSet(encoder, { elementType: 0x20, values: [5, 7] });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x20, 0x02, 0x00, 0x05, 0x07]));
  });
});
