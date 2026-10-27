import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeInt40 } from './encode-z-c-l-data-type-int40.ts';

describe('encodeZCLDataTypeInt40', (): void => {
  test('encodes -549755813888.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt40(encoder, -549755813888);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x80]));
  });

  test('encodes 549755813887.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt40(encoder, 549755813887);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0x7f]));
  });
});
