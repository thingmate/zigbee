export interface ZCLIASZoneStatus {
  readonly alarm1: 'alarmed' | 'not-alarmed';
  readonly alarm2: 'alarmed' | 'not-alarmed';
  readonly tamper: 'tampered' | 'not-tampered';
  readonly battery: 'low-battery' | 'battery-ok';
  readonly supervisionNotify: 'notify' | 'does-not-notify';
  readonly restoreNotify: 'notify-restore' | 'does-not-notify-restore';
  readonly trouble: 'trouble' | 'ok';
  readonly acMains: 'ac-mains-fault' | 'ac-mains-ok';
  readonly test: 'sensor-is-in-test-mode' | 'sensor-is-in-operation-mode';
  readonly batteryDefect:
    'sensor-detects-a-defective-battery' | 'sensor-battery-is-functioning-normally';
}
