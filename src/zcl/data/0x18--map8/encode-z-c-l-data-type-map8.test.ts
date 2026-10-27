import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeMap8 } from './encode-z-c-l-data-type-map8.ts';

describe('encodeZCLDataTypeMap8', (): void => {
  test('encodes 0xa5.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeMap8(encoder, 0xa5);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xa5]));
  });
});
