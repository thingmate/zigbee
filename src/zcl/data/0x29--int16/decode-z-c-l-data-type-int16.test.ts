import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeInt16 } from './decode-z-c-l-data-type-int16.ts';

describe('decodeZCLDataTypeInt16', (): void => {
  test('decodes -32768.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00, 0x80]), decodeZCLDataTypeInt16)).toBe(-32768);
  });

  test('decodes 32767.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xff, 0x7f]), decodeZCLDataTypeInt16)).toBe(32767);
  });
});
