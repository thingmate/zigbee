import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUint8 } from './decode-z-c-l-data-type-uint8.ts';

describe('decodeZCLDataTypeUint8', (): void => {
  test('decodes 0x2a.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x2a]), decodeZCLDataTypeUint8)).toBe(0x2a);
  });

  test('decodes 255.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xff]), decodeZCLDataTypeUint8)).toBe(255);
  });
});
