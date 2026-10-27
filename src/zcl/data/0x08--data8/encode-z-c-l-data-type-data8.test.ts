import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeData8 } from './encode-z-c-l-data-type-data8.ts';

describe('encodeZCLDataTypeData8', (): void => {
  test('encodes 0xab.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeData8(encoder, 0xab);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xab]));
  });
});
