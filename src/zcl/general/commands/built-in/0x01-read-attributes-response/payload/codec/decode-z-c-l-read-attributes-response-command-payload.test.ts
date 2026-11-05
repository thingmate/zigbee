import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLReadAttributesResponseCommandPayload } from './decode-z-c-l-read-attributes-response-command-payload.ts';

describe('decodeZCLReadAttributesResponseCommandPayload', (): void => {
  test('decodes an empty payload.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([]), decodeZCLReadAttributesResponseCommandPayload),
    ).toEqual([]);
  });

  test('decodes the success and error status record fields.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x34, 0x12, 0x00, 0x10, 0x01, 0x56, 0x12, 0x86]),
        decodeZCLReadAttributesResponseCommandPayload,
      ),
    ).toEqual([
      { id: 0x1234, status: 0x00, type: 0x10, value: true },
      { id: 0x1256, status: 0x86 },
    ]);
  });
});
