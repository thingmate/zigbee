import { describe, expect, test } from 'vitest';
import { zclIASZoneStatusToDoorWindowState } from './zcl-i-a-s-zone-status-to-door-window-state.ts';

describe('zclIASZoneStatusToDoorWindowState', (): void => {
  test('returns "closed" when both alarms are cleared.', (): void => {
    expect(
      zclIASZoneStatusToDoorWindowState({ alarm1: 'not-alarmed', alarm2: 'not-alarmed' }),
    ).toBe('closed');
  });

  test('returns "tilted" when only alarm1 is alarmed.', (): void => {
    expect(zclIASZoneStatusToDoorWindowState({ alarm1: 'alarmed', alarm2: 'not-alarmed' })).toBe(
      'tilted',
    );
  });

  test('returns "open" when both alarms are alarmed.', (): void => {
    expect(zclIASZoneStatusToDoorWindowState({ alarm1: 'alarmed', alarm2: 'alarmed' })).toBe(
      'open',
    );
  });

  test('throws when only alarm2 is alarmed, which is an invalid state.', (): void => {
    expect((): void => {
      zclIASZoneStatusToDoorWindowState({ alarm1: 'not-alarmed', alarm2: 'alarmed' });
    }).toThrow('Invalid IAS zone status');
  });
});
