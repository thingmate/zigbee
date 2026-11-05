import { describe, expect, test } from 'vitest';
import type { ZCLIASZoneStatus } from '../z-c-l-i-a-s-zone-status.ts';
import { zclIASZoneStatusToMap16 } from './zcl-i-a-s-zone-status-to-map16.ts';

describe('zclIASZoneStatusToMap16', (): void => {
  test('encodes a cleared status into 0x0000.', (): void => {
    const status: ZCLIASZoneStatus = {
      alarm1: 'not-alarmed',
      alarm2: 'not-alarmed',
      tamper: 'not-tampered',
      battery: 'battery-ok',
      supervisionNotify: 'does-not-notify',
      restoreNotify: 'does-not-notify-restore',
      trouble: 'ok',
      acMains: 'ac-mains-ok',
      test: 'sensor-is-in-operation-mode',
      batteryDefect: 'sensor-battery-is-functioning-normally',
    };

    expect(zclIASZoneStatusToMap16(status)).toBe(0x0000);
  });

  test('encodes each flag into its own bit.', (): void => {
    expect(zclIASZoneStatusToMap16({ ...CLEARED, alarm1: 'alarmed' })).toBe(0b0000_0000_0000_0001);
    expect(zclIASZoneStatusToMap16({ ...CLEARED, alarm2: 'alarmed' })).toBe(0b0000_0000_0000_0010);
    expect(zclIASZoneStatusToMap16({ ...CLEARED, tamper: 'tampered' })).toBe(0b0000_0000_0000_0100);
    expect(zclIASZoneStatusToMap16({ ...CLEARED, battery: 'low-battery' })).toBe(
      0b0000_0000_0000_1000,
    );
    expect(zclIASZoneStatusToMap16({ ...CLEARED, supervisionNotify: 'notify' })).toBe(
      0b0000_0000_0001_0000,
    );
    expect(zclIASZoneStatusToMap16({ ...CLEARED, restoreNotify: 'notify-restore' })).toBe(
      0b0000_0000_0010_0000,
    );
    expect(zclIASZoneStatusToMap16({ ...CLEARED, trouble: 'trouble' })).toBe(0b0000_0000_0100_0000);
    expect(zclIASZoneStatusToMap16({ ...CLEARED, acMains: 'ac-mains-fault' })).toBe(
      0b0000_0000_1000_0000,
    );
    expect(zclIASZoneStatusToMap16({ ...CLEARED, test: 'sensor-is-in-test-mode' })).toBe(
      0b0000_0001_0000_0000,
    );
    expect(
      zclIASZoneStatusToMap16({
        ...CLEARED,
        batteryDefect: 'sensor-detects-a-defective-battery',
      }),
    ).toBe(0b0000_0010_0000_0000);
  });
});

const CLEARED: ZCLIASZoneStatus = {
  alarm1: 'not-alarmed',
  alarm2: 'not-alarmed',
  tamper: 'not-tampered',
  battery: 'battery-ok',
  supervisionNotify: 'does-not-notify',
  restoreNotify: 'does-not-notify-restore',
  trouble: 'ok',
  acMains: 'ac-mains-ok',
  test: 'sensor-is-in-operation-mode',
  batteryDefect: 'sensor-battery-is-functioning-normally',
};
