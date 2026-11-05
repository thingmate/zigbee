import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLReadAttributesResponseCommandPayload } from './encode-z-c-l-read-attributes-response-command-payload.ts';

describe('encodeZCLReadAttributesResponseCommandPayload', (): void => {
  test('encodes an empty payload.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReadAttributesResponseCommandPayload(encoder, []);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([]));
  });

  test('encodes the success and error status record fields.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReadAttributesResponseCommandPayload(encoder, [
      { id: 0x1234, status: 0x00, type: 0x10, value: true },
      { id: 0x1256, status: 0x86 },
    ]);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0x34, 0x12, 0x00, 0x10, 0x01, 0x56, 0x12, 0x86]),
    );
  });
});
