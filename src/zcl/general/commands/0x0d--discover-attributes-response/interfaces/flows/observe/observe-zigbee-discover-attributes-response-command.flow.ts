import { type ObserveZigbeeDecodedPayloadFlow } from '../../../../../../command/subsets/payload/decoded/interfaces/flows/observe/observe-zigbee-decoded-payload.flow.js';
import { type ZigbeeDiscoverAttributesResponsePayload } from '../../../members/zigbee-discover-attributes-response-payload/zigbee-discover-attributes-response-payload.js';

export type ObserveZigbeeDiscoverAttributesResponseCommandFlow =
  ObserveZigbeeDecodedPayloadFlow<ZigbeeDiscoverAttributesResponsePayload>;
