import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeBacnetOid } from './decode-z-c-l-data-type-bacnet-oid.ts';

describe('decodeZCLDataTypeBacnetOid', (): void => {
  test('decodes 0x01.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x01, 0x00, 0x00, 0x00]), decodeZCLDataTypeBacnetOid),
    ).toBe(0x01);
  });
});
