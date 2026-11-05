import { describe, expect, test } from 'vitest';
import { ZCLStatusError } from './z-c-l-status-error.ts';

describe('ZCLStatusError', (): void => {
  test('formats the message with the status name and code.', (): void => {
    const error: ZCLStatusError = new ZCLStatusError(0x86);

    expect(error.name).toBe('ZCLStatusError');
    expect(error.status).toBe(0x86);
    expect(error.attributeId).toBeUndefined();
    expect(error.message).toBe('ZCL error: UNSUPPORTED_ATTRIBUTE (0x86).');
  });

  test('formats the message with the attribute id when provided.', (): void => {
    const error: ZCLStatusError = new ZCLStatusError(0x86, 0x0002);

    expect(error.status).toBe(0x86);
    expect(error.attributeId).toBe(0x0002);
    expect(error.message).toBe('ZCL error: UNSUPPORTED_ATTRIBUTE (0x86) for attribute 0x0002.');
  });

  test('falls back to "unknown status" for an unknown status code.', (): void => {
    const error: ZCLStatusError = new ZCLStatusError(0xff, 0x1234);

    expect(error.message).toBe('ZCL error: unknown status (0xff) for attribute 0x1234.');
  });

  test('is an instance of Error.', (): void => {
    expect(new ZCLStatusError(0x00)).toBeInstanceOf(Error);
  });
});
