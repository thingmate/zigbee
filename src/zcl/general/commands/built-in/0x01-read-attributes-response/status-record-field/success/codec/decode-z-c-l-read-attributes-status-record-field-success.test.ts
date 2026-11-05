import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLReadAttributesStatusRecordFieldSuccess } from './decode-z-c-l-read-attributes-status-record-field-success.ts';

describe('decodeZCLReadAttributesStatusRecordFieldSuccess', (): void => {
  test('decodes the type and the value.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x10, 0x01]), (decoder: Decoder): unknown =>
        decodeZCLReadAttributesStatusRecordFieldSuccess(decoder, { id: 0x1234, status: 0x00 }),
      ),
    ).toEqual({ id: 0x1234, status: 0x00, type: 0x10, value: true });
  });
});
