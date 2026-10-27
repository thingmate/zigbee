import type { ZCLIASZoneStatus } from '../../../../../server/attributes/built-in/0x0002-i-a-s-zone-status/payload/z-c-l-i-a-s-zone-status.ts';

export interface ZCLZoneStatusChangeNotificationCommandPayload {
  readonly zoneStatus: ZCLIASZoneStatus;
  readonly extendedStatus: 0;
  readonly zoneId: number;
  readonly delay: number;
}
