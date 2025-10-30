import { type ZigbeeDiscoverAttributesResponseAttributeInformation } from '../zigbee-discover-attributes-response-attribute-information/zigbee-discover-attributes-response-attribute-information.js';

export interface ZigbeeDiscoverAttributesResponsePayload {
  readonly discoveryComplete: boolean;
  readonly attributeInformations: readonly ZigbeeDiscoverAttributesResponseAttributeInformation[];
}
