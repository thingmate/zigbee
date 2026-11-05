import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLReadAttributesCommandPayload } from './decode-z-c-l-read-attributes-command-payload.ts';

describe('decodeZCLReadAttributesCommandPayload', (): void => {
  test('decodes an empty payload.', (): void => {
    expect(Decoder.decode(new Uint8Array([]), decodeZCLReadAttributesCommandPayload)).toEqual([]);
  });

  test('decodes the attribute ids.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x34, 0x12, 0x78, 0x56]),
        decodeZCLReadAttributesCommandPayload,
      ),
    ).toEqual([0x1234, 0x5678]);
  });
});
