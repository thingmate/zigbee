import { describe, expect, test } from 'vitest';
import { getZCLStatusName } from './z-c-l-status.ts';

describe('getZCLStatusName', (): void => {
  test('returns the name of a known status code.', (): void => {
    expect(getZCLStatusName(0x00)).toBe('SUCCESS');
    expect(getZCLStatusName(0x81)).toBe('UNSUP_COMMAND');
    expect(getZCLStatusName(0x86)).toBe('UNSUPPORTED_ATTRIBUTE');
    expect(getZCLStatusName(0xc4)).toBe('LIMIT_REACHED');
  });

  test('returns undefined for an unknown status code.', (): void => {
    expect(getZCLStatusName(0xff)).toBeUndefined();
    expect(getZCLStatusName(0x02)).toBeUndefined();
  });
});
