import { describe, expect, test } from 'vitest';
import { isZCLReadAttributesStatusRecordFieldSuccess } from './is-z-c-l-read-attributes-status-record-field-success.ts';

describe('isZCLReadAttributesStatusRecordFieldSuccess', (): void => {
  test('returns true for the SUCCESS status.', (): void => {
    expect(
      isZCLReadAttributesStatusRecordFieldSuccess({
        id: 0x0000,
        status: 0x00,
        type: 0x10,
        value: true,
      }),
    ).toBe(true);
  });

  test('returns false for any status other than SUCCESS.', (): void => {
    expect(isZCLReadAttributesStatusRecordFieldSuccess({ id: 0x0000, status: 0x86 })).toBe(false);
  });
});
