import { type Encoder } from '@xstd/codec';
import { type ZigbeeDiscoverAttributesPayload } from '../zigbee-discover-attributes-payload.js';

export function encodeZigbeeDiscoverAttributesPayload(
  encoder: Encoder,
  { startAttributeIdentifier, maximumAttributeIdentifiers }: ZigbeeDiscoverAttributesPayload,
): void {
  encoder.uint16LE(startAttributeIdentifier).uint8(maximumAttributeIdentifiers);
}
