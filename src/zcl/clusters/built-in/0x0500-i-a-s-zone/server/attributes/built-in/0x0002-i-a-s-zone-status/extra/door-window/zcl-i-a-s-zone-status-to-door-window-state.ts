import type { ZCLIASZoneStatus } from '../../payload/z-c-l-i-a-s-zone-status.ts';
import type { ZCLIASZoneStatusDoorWindowState } from './z-c-l-i-a-s-zone-status-door-window-state.ts';

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
