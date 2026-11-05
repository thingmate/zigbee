/**
 * IAS Zone Status attribute (0x0002), decoded from its map16 wire value.
 *
 * @inheritDoc 8.2.2.1.1.3 ZoneStatus Attribute
 */
export interface ZCLIASZoneStatus {
  /** Alarm 1: meaning depends on the zone type; the pair is interpreted jointly (see the zone type tables, e.g. Table 8-7 for 0x0016). */
  readonly alarm1: 'alarmed' | 'not-alarmed';
  /** Alarm 2: meaning depends on the zone type; the pair is interpreted jointly (see the zone type tables, e.g. Table 8-7 for 0x0016). */
  readonly alarm2: 'alarmed' | 'not-alarmed';
  /** The enclosure is opened, or the device is removed from its mount. */
  readonly tamper: 'tampered' | 'not-tampered';
  readonly battery: 'low-battery' | 'battery-ok';
  /** The device reports its status through supervision messages. */
  readonly supervisionNotify: 'notify' | 'does-not-notify';
  /** The device reports when the zone status restores to its non-alarm value. */
  readonly restoreNotify: 'notify-restore' | 'does-not-notify-restore';
  readonly trouble: 'trouble' | 'ok';
  readonly acMains: 'ac-mains-fault' | 'ac-mains-ok';
  readonly test: 'sensor-is-in-test-mode' | 'sensor-is-in-operation-mode';
  readonly batteryDefect:
    'sensor-detects-a-defective-battery' | 'sensor-battery-is-functioning-normally';
}
