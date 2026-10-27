import type { ZCLAttributeMapper } from '../../../../../../../primitives/attribute/mapper/z-c-l-attribute-mapper.ts';
import { zclIASZoneStatusFromMap16 } from './codec/zcl-i-a-s-zone-status-from-map16.ts';
import { zclIASZoneStatusToMap16 } from './codec/zcl-i-a-s-zone-status-to-map16.ts';

import type { ZCLIASZoneStatus } from './z-c-l-i-a-s-zone-status.ts';

export type ZCLIASZoneStatusMapper = ZCLAttributeMapper<ZCLIASZoneStatus>;

export const ZCL_IAS_ZONE_STATUS_MAPPER: ZCLIASZoneStatusMapper = Object.freeze({
  inOut: zclIASZoneStatusToMap16,
  outIn: zclIASZoneStatusFromMap16,
} as ZCLIASZoneStatusMapper);
