import type { ZCLIASZoneStatus } from '../z-c-l-i-a-s-zone-status.ts';

export function zclIASZoneStatusToMap16({
  alarm1,
  alarm2,
  tamper,
  battery,
  supervisionNotify,
  restoreNotify,
  trouble,
  acMains,
  test,
  batteryDefect,
}: ZCLIASZoneStatus): number {
  return (
    (alarm1 === 'alarmed' ? 0b0000_0000_0000_0001 : 0x0000) |
    (alarm2 === 'alarmed' ? 0b0000_0000_0000_0010 : 0x0000) |
    (tamper === 'tampered' ? 0b0000_0000_0000_0100 : 0x0000) |
    (battery === 'low-battery' ? 0b0000_0000_0000_1000 : 0x0000) |
    (supervisionNotify === 'notify' ? 0b0000_0000_0001_0000 : 0x0000) |
    (restoreNotify === 'notify-restore' ? 0b0000_0000_0010_0000 : 0x0000) |
    (trouble === 'trouble' ? 0b0000_0000_0100_0000 : 0x0000) |
    (acMains === 'ac-mains-fault' ? 0b0000_0000_1000_0000 : 0x0000) |
    (test === 'sensor-is-in-test-mode' ? 0b0000_0001_0000_0000 : 0x0000) |
    (batteryDefect === 'sensor-detects-a-defective-battery' ? 0b0000_0010_0000_0000 : 0x0000)
  );
}
