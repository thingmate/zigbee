import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeEnum8 } from './decode-z-c-l-data-type-enum8.ts';

describe('decodeZCLDataTypeEnum8', (): void => {
  test('decodes 0x03.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x03]), decodeZCLDataTypeEnum8)).toBe(0x03);
  });
});
