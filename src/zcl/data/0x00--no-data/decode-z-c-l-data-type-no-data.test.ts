import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeNoData } from './decode-z-c-l-data-type-no-data.ts';

describe('decodeZCLDataTypeNoData', (): void => {
  test('decodes nothing and returns undefined.', (): void => {
    expect(Decoder.decode(new Uint8Array([]), decodeZCLDataTypeNoData)).toBeUndefined();
  });
});
