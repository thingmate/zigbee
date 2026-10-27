import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeInt48 } from './encode-z-c-l-data-type-int48.ts';

describe('encodeZCLDataTypeInt48', (): void => {
  test('encodes -140737488355328.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt48(encoder, -140737488355328);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x80]));
  });

  test('encodes 140737488355327.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeInt48(encoder, 140737488355327);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0x7f]));
  });
});
