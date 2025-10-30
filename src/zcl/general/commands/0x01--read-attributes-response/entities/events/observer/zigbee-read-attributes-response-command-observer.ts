import { type ZigbeeDecodedPayloadObserver } from '../../../../../../command/subsets/payload/decoded/entities/events/observer/zigbee-decoded-payload-observer.js';
import { type ZigbeeReadAttributesResponsePayload } from '../../../types/zigbee-read-attributes-response-payload/zigbee-read-attributes-response-payload.js';

export type ZigbeeReadAttributesResponseCommandObserver =
  ZigbeeDecodedPayloadObserver<ZigbeeReadAttributesResponsePayload>;
