import { type EntityAction } from '@thingmate/entity';
import { type ZigbeeDiscoverAttributesPayload } from '../../../../commands/0x0c--discover-attributes/types/zigbee-discover-attributes-payload/zigbee-discover-attributes-payload.js';
import { type ZigbeeDiscoverAttributesResponsePayload } from '../../../../commands/0x0d--discover-attributes-response/types/zigbee-discover-attributes-response-payload/zigbee-discover-attributes-response-payload.js';

export type DiscoverZigbeeAttributes = EntityAction<
  [payload: ZigbeeDiscoverAttributesPayload],
  ZigbeeDiscoverAttributesResponsePayload
>;
