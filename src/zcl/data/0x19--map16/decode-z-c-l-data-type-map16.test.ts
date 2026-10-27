import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeMap16 } from './decode-z-c-l-data-type-map16.ts';

describe('decodeZCLDataTypeMap16', (): void => {
  test('decodes 0x1234.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x34, 0x12]), decodeZCLDataTypeMap16)).toBe(0x1234);
  });
});
