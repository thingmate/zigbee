import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLReadAttributesStatusRecordFieldSuccess } from './encode-z-c-l-read-attributes-status-record-field-success.ts';

describe('encodeZCLReadAttributesStatusRecordFieldSuccess', (): void => {
  test('encodes the id, the status, the type, and the value.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReadAttributesStatusRecordFieldSuccess(encoder, {
      id: 0x1234,
      status: 0x00,
      type: 0x10,
      value: true,
    });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x34, 0x12, 0x00, 0x10, 0x01]));
  });
});
