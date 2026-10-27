import { type Decoder } from '@xstd/codec';
import { decodeZCLDataTypeMap8 } from '../../../../../../../../../data/0x18--map8/decode-z-c-l-data-type-map8.ts';
import { decodeZCLDataTypeMap16 } from '../../../../../../../../../data/0x19--map16/decode-z-c-l-data-type-map16.ts';
import { decodeZCLDataTypeUint8 } from '../../../../../../../../../data/0x20--uint8/decode-z-c-l-data-type-uint8.ts';
import { decodeZCLDataTypeUint16 } from '../../../../../../../../../data/0x21--uint16/decode-z-c-l-data-type-uint16.ts';
import { zclIASZoneStatusFromMap16 } from '../../../../../../server/attributes/built-in/0x0002-i-a-s-zone-status/payload/codec/zcl-i-a-s-zone-status-from-map16.ts';
import type { ZCLZoneStatusChangeNotificationCommandPayload } from '../z-c-l-zone-status-change-notification-command-payload.ts';

export function decodeZCLZoneStatusChangeNotificationCommandPayload(
  decoder: Decoder,
): ZCLZoneStatusChangeNotificationCommandPayload {
  return {
    zoneStatus: zclIASZoneStatusFromMap16(decodeZCLDataTypeMap16(decoder)),
    extendedStatus: decodeZCLDataTypeMap8(decoder) as 0, // reserved
    zoneId: decodeZCLDataTypeUint8(decoder),
    delay: decodeZCLDataTypeUint16(decoder),
  };
}
