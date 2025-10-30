import { type Decoder } from '@xstd/codec';
import { type ZigbeeDiscoverAttributesResponseAttributeInformation } from '../zigbee-discover-attributes-response-attribute-information.js';

export function decodeZigbeeDiscoverAttributesResponseAttributeInformation(
  decoder: Decoder,
): ZigbeeDiscoverAttributesResponseAttributeInformation {
  return {
    id: decoder.uint16LE(),
    type: decoder.uint8(),
  };
}
