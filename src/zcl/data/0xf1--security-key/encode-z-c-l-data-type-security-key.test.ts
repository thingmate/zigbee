import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeSecurityKey } from './encode-z-c-l-data-type-security-key.ts';

describe('encodeZCLDataTypeSecurityKey', (): void => {
  test('encodes a security key.', (): void => {
    const encoder: Encoder = new Encoder();
    const key: Uint8Array = new Uint8Array([
      0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e,
      0x0f,
    ]);
    encodeZCLDataTypeSecurityKey(encoder, key);
    expect(encoder.toUint8Array()).toEqual(key);
  });

  test('throws on a security key of 15 bytes.', (): void => {
    const encoder: Encoder = new Encoder();
    expect((): void => {
      encodeZCLDataTypeSecurityKey(encoder, new Uint8Array(15));
    }).toThrow('Security key length must be 16.');
  });
});
