import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeData8 } from './decode-z-c-l-data-type-data8.ts';

describe('decodeZCLDataTypeData8', (): void => {
  test('decodes 0xab.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xab]), decodeZCLDataTypeData8)).toBe(0xab);
  });
});
