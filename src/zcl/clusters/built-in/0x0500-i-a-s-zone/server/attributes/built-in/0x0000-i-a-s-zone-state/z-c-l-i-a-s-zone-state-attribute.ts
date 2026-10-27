import { enumZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/built-in/enum/enum-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { IASZoneClusterZCLClusterAttribute } from '../../attribute/i-a-s-zone-cluster-z-c-l-cluster-attribute.ts';

/**
 * @type {ZCLIASZoneState}
 */
export class ZCLIASZoneStateAttribute extends IASZoneClusterZCLClusterAttribute<ZCLIASZoneState> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, IAS_ZONE_STATE_ZCL_ATTRIBUTE_MAPPER);
  }
}

export type ZCLIASZoneState = 'not-enrolled' | 'enrolled';

const IAS_ZONE_STATE_ZCL_ATTRIBUTE_MAPPER = enumZCLAttributeMapper<ZCLIASZoneState>([
  [0x00, 'not-enrolled'],
  [0x01, 'enrolled'],
]);
