import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { IASZoneClusterZCLClusterAttribute } from '../../attribute/i-a-s-zone-cluster-z-c-l-cluster-attribute.ts';
import { ZCL_IAS_ZONE_STATUS_MAPPER } from './payload/z-c-l-i-a-s-zone-status-mapper.ts';
import type { ZCLIASZoneStatus } from './payload/z-c-l-i-a-s-zone-status.ts';

/**
 * @type {ZCLIASZoneStatus}
 */
export class ZCLIASZoneStatusAttribute extends IASZoneClusterZCLClusterAttribute<ZCLIASZoneStatus> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0002, ZCL_IAS_ZONE_STATUS_MAPPER);
  }
}
