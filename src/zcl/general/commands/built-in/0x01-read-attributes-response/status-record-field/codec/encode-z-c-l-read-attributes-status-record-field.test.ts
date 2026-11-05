import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLReadAttributesStatusRecordField } from './encode-z-c-l-read-attributes-status-record-field.ts';

describe('encodeZCLReadAttributesStatusRecordField', (): void => {
  test('encodes a success status record field.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReadAttributesStatusRecordField(encoder, {
      id: 0x1234,
      status: 0x00,
      type: 0x10,
      value: true,
    });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x34, 0x12, 0x00, 0x10, 0x01]));
  });

  test('encodes an error status record field.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReadAttributesStatusRecordField(encoder, { id: 0x1234, status: 0x86 });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x34, 0x12, 0x86]));
  });
});
