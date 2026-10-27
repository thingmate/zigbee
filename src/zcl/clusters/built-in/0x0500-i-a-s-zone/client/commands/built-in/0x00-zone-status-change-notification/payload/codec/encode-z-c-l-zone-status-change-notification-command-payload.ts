import { type Encoder } from '@xstd/codec';
import { encodeZCLDataTypeMap8 } from '../../../../../../../../../data/0x18--map8/encode-z-c-l-data-type-map8.ts';
import { encodeZCLDataTypeMap16 } from '../../../../../../../../../data/0x19--map16/encode-z-c-l-data-type-map16.ts';
import { encodeZCLDataTypeUint8 } from '../../../../../../../../../data/0x20--uint8/encode-z-c-l-data-type-uint8.ts';
import { encodeZCLDataTypeUint16 } from '../../../../../../../../../data/0x21--uint16/encode-z-c-l-data-type-uint16.ts';
import { zclIASZoneStatusToMap16 } from '../../../../../../server/attributes/built-in/0x0002-i-a-s-zone-status/payload/codec/zcl-i-a-s-zone-status-to-map16.ts';
import type { ZCLZoneStatusChangeNotificationCommandPayload } from '../z-c-l-zone-status-change-notification-command-payload.ts';

export function encodeZCLZoneStatusChangeNotificationCommandPayload(
  encoder: Encoder,
  { zoneStatus, extendedStatus, zoneId, delay }: ZCLZoneStatusChangeNotificationCommandPayload,
): void {
  encodeZCLDataTypeMap16(encoder, zclIASZoneStatusToMap16(zoneStatus));
  encodeZCLDataTypeMap8(encoder, extendedStatus);
  encodeZCLDataTypeUint8(encoder, zoneId);
  encodeZCLDataTypeUint16(encoder, delay);
}
