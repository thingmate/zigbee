/**
 * Door/window handle state, as reported by zone type `0x0016`.
 *
 * @see `zclIASZoneStatusToDoorWindowState` for the mapping from the IAS Zone Status alarms.
 */
export type ZCLIASZoneStatusDoorWindowState = 'closed' | 'tilted' | 'open';
