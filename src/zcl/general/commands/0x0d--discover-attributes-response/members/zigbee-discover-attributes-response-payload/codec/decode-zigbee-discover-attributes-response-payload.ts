import { type Decoder } from '@xstd/codec';
import { decodeZigbeeDiscoverAttributesResponseAttributeInformation } from '../../zigbee-discover-attributes-response-attribute-information/codec/decode-zigbee-discover-attributes-response-attribute-information.js';
import { type ZigbeeDiscoverAttributesResponseAttributeInformation } from '../../zigbee-discover-attributes-response-attribute-information/zigbee-discover-attributes-response-attribute-information.js';
import { type ZigbeeDiscoverAttributesResponsePayload } from '../zigbee-discover-attributes-response-payload.js';

export function decodeZigbeeDiscoverAttributesResponsePayload(
  decoder: Decoder,
): ZigbeeDiscoverAttributesResponsePayload {
  const discoveryComplete: boolean = decoder.uint8() === 1;

  const attributeInformations: ZigbeeDiscoverAttributesResponseAttributeInformation[] = [];

  while (!decoder.done) {
    attributeInformations.push(decodeZigbeeDiscoverAttributesResponseAttributeInformation(decoder));
  }

  return {
    discoveryComplete,
    attributeInformations,
  };
}
