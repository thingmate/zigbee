import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeBacnetOid } from './encode-z-c-l-data-type-bacnet-oid.ts';

describe('encodeZCLDataTypeBacnetOid', (): void => {
  test('encodes 0x01.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeBacnetOid(encoder, 0x01);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x01, 0x00, 0x00, 0x00]));
  });
});
