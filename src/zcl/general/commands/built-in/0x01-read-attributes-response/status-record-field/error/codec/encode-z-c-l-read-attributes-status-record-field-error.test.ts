import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLReadAttributesStatusRecordFieldError } from './encode-z-c-l-read-attributes-status-record-field-error.ts';

describe('encodeZCLReadAttributesStatusRecordFieldError', (): void => {
  test('encodes the id and the status.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReadAttributesStatusRecordFieldError(encoder, { id: 0x1234, status: 0x86 });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x34, 0x12, 0x86]));
  });
});
