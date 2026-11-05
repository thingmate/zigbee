import type { ZCLZoneStatusChangeNotificationCommandPayload } from '../payload/z-c-l-zone-status-change-notification-command-payload.ts';

/**
 * Command frame arguments of the IAS Zone client command "Status Change Notification" (0x00).
 */
export type ZCLZoneStatusChangeNotificationCommandArguments = readonly [
  payload: ZCLZoneStatusChangeNotificationCommandPayload,
];
