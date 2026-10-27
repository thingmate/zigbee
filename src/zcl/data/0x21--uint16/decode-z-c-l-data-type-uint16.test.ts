import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeUint16 } from './decode-z-c-l-data-type-uint16.ts';

describe('decodeZCLDataTypeUint16', (): void => {
  test('decodes 0x1234.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x34, 0x12]), decodeZCLDataTypeUint16)).toBe(0x1234);
  });

  test('decodes 65535.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xff, 0xff]), decodeZCLDataTypeUint16)).toBe(65535);
  });
});
