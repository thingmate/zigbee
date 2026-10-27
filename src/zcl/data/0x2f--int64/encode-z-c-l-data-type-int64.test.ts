import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeInt64 } from './encode-z-c-l-data-type-int64.ts';

describe('encodeZCLDataTypeInt64', (): void => {
  test('encodes -9223372036854775808n.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt64(encoder, -9223372036854775808n);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80]),
    );
  });

  test('encodes 9223372036854775807n.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt64(encoder, 9223372036854775807n);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x7f]),
    );
  });
});
