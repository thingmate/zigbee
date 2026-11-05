import type { ZCLIASZoneStatus } from '../../../../../server/attributes/built-in/0x0002-i-a-s-zone-status/payload/z-c-l-i-a-s-zone-status.ts';

/**
 * Payload of the IAS Zone client command "Status Change Notification" (0x00).
 *
 * Sent by the device whenever its zone status changes.
 *
 * @inheritDoc 8.2.3.1.1 Status Change Notification Command
 */
export interface ZCLZoneStatusChangeNotificationCommandPayload {
  readonly zoneStatus: ZCLIASZoneStatus;
  /** Reserved: always 0. */
  readonly extendedStatus: 0;
  readonly zoneId: number;
  /** The minimum reporting interval of the device, in seconds. */
  readonly delay: number;
}
