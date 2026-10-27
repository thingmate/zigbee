import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeData16 } from './decode-z-c-l-data-type-data16.ts';

describe('decodeZCLDataTypeData16', (): void => {
  test('decodes 0xabcd.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xcd, 0xab]), decodeZCLDataTypeData16)).toBe(0xabcd);
  });
});
