import { describe, expect, test } from 'vitest';
import { isZCLReadAttributesStatusRecordFieldError } from './is-z-c-l-read-attributes-status-record-field-error.ts';

describe('isZCLReadAttributesStatusRecordFieldError', (): void => {
  test('returns true for any status other than SUCCESS.', (): void => {
    expect(isZCLReadAttributesStatusRecordFieldError({ id: 0x0000, status: 0x86 })).toBe(true);
    expect(isZCLReadAttributesStatusRecordFieldError({ id: 0x0000, status: 0x01 })).toBe(true);
  });

  test('returns false for the SUCCESS status.', (): void => {
    expect(
      isZCLReadAttributesStatusRecordFieldError({
        id: 0x0000,
        status: 0x00,
        type: 0x10,
        value: true,
      }),
    ).toBe(false);
  });
});
