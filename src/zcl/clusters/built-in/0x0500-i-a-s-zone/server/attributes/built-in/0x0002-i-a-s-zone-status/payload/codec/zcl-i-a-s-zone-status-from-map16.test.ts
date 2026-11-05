import { describe, expect, test } from 'vitest';
import type { ZCLIASZoneStatus } from '../z-c-l-i-a-s-zone-status.ts';
import { zclIASZoneStatusFromMap16 } from './zcl-i-a-s-zone-status-from-map16.ts';
import { zclIASZoneStatusToMap16 } from './zcl-i-a-s-zone-status-to-map16.ts';

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

const FULL: ZCLIASZoneStatus = {
  alarm1: 'alarmed',
  alarm2: 'alarmed',
  tamper: 'tampered',
  battery: 'low-battery',
  supervisionNotify: 'notify',
  restoreNotify: 'notify-restore',
  trouble: 'trouble',
  acMains: 'ac-mains-fault',
  test: 'sensor-is-in-test-mode',
  batteryDefect: 'sensor-detects-a-defective-battery',
};

describe('zclIASZoneStatusFromMap16', (): void => {
  test('decodes 0x0000 into a cleared status.', (): void => {
    expect(zclIASZoneStatusFromMap16(0x0000)).toEqual(CLEARED);
  });

  test('decodes every bit set into a fully alerted status.', (): void => {
    expect(zclIASZoneStatusFromMap16(0b0000_0011_1111_1111)).toEqual(FULL);
  });

  test('ignores the reserved high bits.', (): void => {
    expect(zclIASZoneStatusFromMap16(0b1111_1100_0000_0000)).toEqual(CLEARED);
  });

  test('round-trips any status.', (): void => {
    expect(zclIASZoneStatusToMap16(zclIASZoneStatusFromMap16(zclIASZoneStatusToMap16(FULL)))).toBe(
      zclIASZoneStatusToMap16(FULL),
    );
  });
});
