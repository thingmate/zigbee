import { describe, expect, test } from 'vitest';
import type { ZCLReadAttributesActionResult } from './z-c-l-read-attributes-action-result.ts';

describe('ZCLReadAttributesActionResult', (): void => {
  test('accepts success and error status record fields.', (): void => {
    const result: ZCLReadAttributesActionResult = [
      { id: 0x0000, status: 0x00, type: 0x10, value: true },
      { id: 0x0001, status: 0x86 },
    ];

    expect(result).toHaveLength(2);
  });
});
