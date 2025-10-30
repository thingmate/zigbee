import { type ZigbeeDecodedPayloadObserver } from '../../../../../../command/subsets/payload/decoded/entities/events/observer/zigbee-decoded-payload-observer.js';
import { type ZigbeeDiscoverAttributesResponsePayload } from '../../../types/zigbee-discover-attributes-response-payload/zigbee-discover-attributes-response-payload.js';

export type ZigbeeDiscoverAttributesResponseCommandObserver =
  ZigbeeDecodedPayloadObserver<ZigbeeDiscoverAttributesResponsePayload>;
