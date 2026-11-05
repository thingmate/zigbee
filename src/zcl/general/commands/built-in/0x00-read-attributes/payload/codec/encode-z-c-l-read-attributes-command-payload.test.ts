import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLReadAttributesCommandPayload } from './encode-z-c-l-read-attributes-command-payload.ts';

describe('encodeZCLReadAttributesCommandPayload', (): void => {
  test('encodes an empty payload.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReadAttributesCommandPayload(encoder, []);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([]));
  });

  test('encodes the attribute ids.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReadAttributesCommandPayload(encoder, [0x1234, 0x5678]);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x34, 0x12, 0x78, 0x56]));
  });
});
