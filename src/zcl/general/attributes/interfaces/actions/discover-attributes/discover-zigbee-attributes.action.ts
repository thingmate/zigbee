import { type Action } from '@xstd/action';
import { type ZigbeeDiscoverAttributesPayload } from '../../../../commands/0x0c--discover-attributes/members/zigbee-discover-attributes-payload/zigbee-discover-attributes-payload.js';
import { type ZigbeeDiscoverAttributesResponsePayload } from '../../../../commands/0x0d--discover-attributes-response/members/zigbee-discover-attributes-response-payload/zigbee-discover-attributes-response-payload.js';

export type DiscoverZigbeeAttributesAction = Action<
  [payload: ZigbeeDiscoverAttributesPayload],
  ZigbeeDiscoverAttributesResponsePayload
>;
