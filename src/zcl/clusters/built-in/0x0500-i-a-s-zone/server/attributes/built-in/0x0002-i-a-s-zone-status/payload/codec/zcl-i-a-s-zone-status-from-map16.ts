import type { ZCLIASZoneStatus } from '../z-c-l-i-a-s-zone-status.ts';

export function zclIASZoneStatusFromMap16(input: number): ZCLIASZoneStatus {
  return {
    alarm1: input & 0b0000_0000_0000_0001 ? 'alarmed' : 'not-alarmed',
    alarm2: input & 0b0000_0000_0000_0010 ? 'alarmed' : 'not-alarmed',
    tamper: input & 0b0000_0000_0000_0100 ? 'tampered' : 'not-tampered',
    battery: input & 0b0000_0000_0000_1000 ? 'low-battery' : 'battery-ok',
    supervisionNotify: input & 0b0000_0000_0001_0000 ? 'notify' : 'does-not-notify',
    restoreNotify: input & 0b0000_0000_0010_0000 ? 'notify-restore' : 'does-not-notify-restore',
    trouble: input & 0b0000_0000_0100_0000 ? 'trouble' : 'ok',
    acMains: input & 0b0000_0000_1000_0000 ? 'ac-mains-fault' : 'ac-mains-ok',
    test: input & 0b0000_0001_0000_0000 ? 'sensor-is-in-test-mode' : 'sensor-is-in-operation-mode',
    batteryDefect:
      input & 0b0000_0010_0000_0000
        ? 'sensor-detects-a-defective-battery'
        : 'sensor-battery-is-functioning-normally',
  };
}
