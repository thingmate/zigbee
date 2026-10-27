import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeEnum16 } from './decode-z-c-l-data-type-enum16.ts';

describe('decodeZCLDataTypeEnum16', (): void => {
  test('decodes 0x03.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x03, 0x00]), decodeZCLDataTypeEnum16)).toBe(0x03);
  });
});
