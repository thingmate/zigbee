import type { ZCLIASZoneStatus } from '../../payload/z-c-l-i-a-s-zone-status.ts';
import type { ZCLIASZoneStatusDoorWindowState } from './z-c-l-i-a-s-zone-status-door-window-state.ts';

/**
 * Maps an IAS Zone Status into a door/window handle state.
 *
 * For zone type `0x0016` (door/window handle), the two alarm bits form a sequential pair,
 * not independent alarms: alarm 1 signals "no longer closed" (open or tilted), and alarm 2
 * only refines it into "fully open".
 *
 * | alarm1 | alarm2 | State |
 * |--------|--------|-------|
 * | not-alarmed | not-alarmed | closed |
 * | alarmed | not-alarmed | tilted (partly open) |
 * | alarmed | alarmed | open |
 * | not-alarmed | alarmed | undefined: a door/window handle never reports alarm 2 without alarm 1 |
 *
 * @inheritDoc 8.2.2.1.1.3 ZoneStatus Attribute
 * @see Table 8-7 "Usage of alarm bits of ZoneStatus Attribute for door/window handle zone type (0x0016)"
 * @throws Error When alarm 2 is armed without alarm 1.
 */
export function zclIASZoneStatusToDoorWindowState({
  alarm1,
  alarm2,
}: Pick<ZCLIASZoneStatus, 'alarm1' | 'alarm2'>): ZCLIASZoneStatusDoorWindowState {
  if (alarm1 === 'alarmed') {
    if (alarm2 === 'alarmed') {
      return 'open';
    } else {
      return 'tilted';
    }
  } else {
    if (alarm2 === 'alarmed') {
      throw new Error('Invalid IAS zone status');
    } else {
      return 'closed';
    }
  }
}
