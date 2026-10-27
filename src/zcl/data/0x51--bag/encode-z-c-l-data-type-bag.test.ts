import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeBag } from './encode-z-c-l-data-type-bag.ts';

describe('encodeZCLDataTypeBag', (): void => {
  test('encodes a bag like an array.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeBag(encoder, { elementType: 0x20, values: [5, 7] });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x20, 0x02, 0x00, 0x05, 0x07]));
  });
});
