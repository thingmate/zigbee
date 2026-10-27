import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeInt8 } from './decode-z-c-l-data-type-int8.ts';

describe('decodeZCLDataTypeInt8', (): void => {
  test('decodes -128.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x80]), decodeZCLDataTypeInt8)).toBe(-128);
  });

  test('decodes 127.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x7f]), decodeZCLDataTypeInt8)).toBe(127);
  });
});
