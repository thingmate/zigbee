import { Decoder, Encoder } from '@xstd/codec';
import type { ZCLPayloadMapper } from '../../../../../../../../payload/mapper/z-c-l-payload-mapper.ts';

import { decodeZCLZoneStatusChangeNotificationCommandPayload } from '../payload/codec/decode-z-c-l-zone-status-change-notification-command-payload.ts';
import { encodeZCLZoneStatusChangeNotificationCommandPayload } from '../payload/codec/encode-z-c-l-zone-status-change-notification-command-payload.ts';
import type { ZCLZoneStatusChangeNotificationCommandArguments } from './z-c-l-zone-status-change-notification-command-arguments.ts';

export type ZCLZoneStatusChangeNotificationCommandArgumentsMapper =
  ZCLPayloadMapper<ZCLZoneStatusChangeNotificationCommandArguments>;

export const ZCL_ZONE_STATUS_CHANGE_NOTIFICATION_COMMAND_ARGUMENTS_MAPPER: ZCLZoneStatusChangeNotificationCommandArgumentsMapper =
  Object.freeze({
    inOut: ([payload]: ZCLZoneStatusChangeNotificationCommandArguments): Uint8Array => {
      return Encoder.encode(payload, encodeZCLZoneStatusChangeNotificationCommandPayload);
    },
    outIn: (payload: Uint8Array): ZCLZoneStatusChangeNotificationCommandArguments => {
      return [Decoder.decode(payload, decodeZCLZoneStatusChangeNotificationCommandPayload)];
    },
  });
