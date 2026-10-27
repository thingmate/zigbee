import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeNoData } from './encode-z-c-l-data-type-no-data.ts';

describe('encodeZCLDataTypeNoData', (): void => {
  test('encodes nothing.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeNoData(encoder, undefined);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([]));
  });
});
