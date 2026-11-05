import { describe, expect, test } from 'vitest';
import { getOppositeZCLCommandFrameDirection } from './z-c-l-command-frame.ts';

describe('getOppositeZCLCommandFrameDirection', (): void => {
  test('returns "server-to-client" for "client-to-server".', (): void => {
    expect(getOppositeZCLCommandFrameDirection('client-to-server')).toBe('server-to-client');
  });

  test('returns "client-to-server" for "server-to-client".', (): void => {
    expect(getOppositeZCLCommandFrameDirection('server-to-client')).toBe('client-to-server');
  });
});
