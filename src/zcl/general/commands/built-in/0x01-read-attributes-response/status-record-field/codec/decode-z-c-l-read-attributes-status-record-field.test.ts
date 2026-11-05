import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLReadAttributesStatusRecordField } from './decode-z-c-l-read-attributes-status-record-field.ts';

describe('decodeZCLReadAttributesStatusRecordField', (): void => {
  test('decodes a success status record field.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x34, 0x12, 0x00, 0x10, 0x01]),
        decodeZCLReadAttributesStatusRecordField,
      ),
    ).toEqual({ id: 0x1234, status: 0x00, type: 0x10, value: true });
  });

  test('decodes an error status record field.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x34, 0x12, 0x86]), decodeZCLReadAttributesStatusRecordField),
    ).toEqual({ id: 0x1234, status: 0x86 });
  });
});
