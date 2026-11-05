import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLReadAttributesStatusRecordFieldError } from './decode-z-c-l-read-attributes-status-record-field-error.ts';

describe('decodeZCLReadAttributesStatusRecordFieldError', (): void => {
  test('returns the provided id and status without consuming the decoder.', (): void => {
    const decoder: Decoder = new Decoder(new Uint8Array([0xff]));
    expect(
      decodeZCLReadAttributesStatusRecordFieldError(decoder, { id: 0x1234, status: 0x86 }),
    ).toEqual({ id: 0x1234, status: 0x86 });
    expect(decoder.remaining).toBe(1);
  });
});
