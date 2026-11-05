import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import type { ZCLIASZoneStatus } from '../../../../../../server/attributes/built-in/0x0002-i-a-s-zone-status/payload/z-c-l-i-a-s-zone-status.ts';
import type { ZCLZoneStatusChangeNotificationCommandPayload } from '../z-c-l-zone-status-change-notification-command-payload.ts';
import { encodeZCLZoneStatusChangeNotificationCommandPayload } from './encode-z-c-l-zone-status-change-notification-command-payload.ts';

describe('encodeZCLZoneStatusChangeNotificationCommandPayload', (): void => {
  test('encodes the zone status, extended status, zone id and delay.', (): void => {
    const zoneStatus: ZCLIASZoneStatus = {
      alarm1: 'alarmed',
      alarm2: 'alarmed',
      tamper: 'not-tampered',
      battery: 'battery-ok',
      supervisionNotify: 'does-not-notify',
      restoreNotify: 'does-not-notify-restore',
      trouble: 'ok',
      acMains: 'ac-mains-ok',
      test: 'sensor-is-in-operation-mode',
      batteryDefect: 'sensor-battery-is-functioning-normally',
    };
    const payload: ZCLZoneStatusChangeNotificationCommandPayload = {
      zoneStatus,
      extendedStatus: 0,
      zoneId: 0x0a,
      delay: 0x0100,
    };

    const encoder: Encoder = new Encoder();
    encodeZCLZoneStatusChangeNotificationCommandPayload(encoder, payload);

    // map16 zone status (0x0003) + map8 extended status + uint8 zone id + uint16 delay (0x0100)
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x03, 0x00, 0x00, 0x0a, 0x00, 0x01]));
  });
});
