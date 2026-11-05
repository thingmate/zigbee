import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import type { ZCLIASZoneStatus } from '../../../../../../server/attributes/built-in/0x0002-i-a-s-zone-status/payload/z-c-l-i-a-s-zone-status.ts';
import { decodeZCLZoneStatusChangeNotificationCommandPayload } from './decode-z-c-l-zone-status-change-notification-command-payload.ts';

const ZONE_STATUS: ZCLIASZoneStatus = {
  alarm1: 'not-alarmed',
  alarm2: 'not-alarmed',
  tamper: 'tampered',
  battery: 'low-battery',
  supervisionNotify: 'notify',
  restoreNotify: 'does-not-notify-restore',
  trouble: 'trouble',
  acMains: 'ac-mains-ok',
  test: 'sensor-is-in-operation-mode',
  batteryDefect: 'sensor-battery-is-functioning-normally',
};

describe('decodeZCLZoneStatusChangeNotificationCommandPayload', (): void => {
  test('decodes the zone status, extended status, zone id and delay.', (): void => {
    // map16 zone status (0x005c) + map8 extended status + uint8 zone id + uint16 delay (0x0100)
    expect(
      Decoder.decode(
        new Uint8Array([0x5c, 0x00, 0x00, 0x0a, 0x00, 0x01]),
        decodeZCLZoneStatusChangeNotificationCommandPayload,
      ),
    ).toEqual({
      zoneStatus: ZONE_STATUS,
      extendedStatus: 0,
      zoneId: 0x0a,
      delay: 0x0100,
    });
  });
});
