import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeBoolean } from './decode-z-c-l-data-type-boolean.ts';

describe('decodeZCLDataTypeBoolean', (): void => {
  test('decodes true.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x01]), decodeZCLDataTypeBoolean)).toBe(true);
  });

  test('decodes false.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00]), decodeZCLDataTypeBoolean)).toBe(false);
  });
});
