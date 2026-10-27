import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeSecurityKey } from './decode-z-c-l-data-type-security-key.ts';

describe('decodeZCLDataTypeSecurityKey', (): void => {
  test('decodes a security key.', (): void => {
    const key: Uint8Array = new Uint8Array([
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e,
      0x0f,
    ]);
    expect(Decoder.decode(key, decodeZCLDataTypeSecurityKey)).toEqual(key);
  });
});
