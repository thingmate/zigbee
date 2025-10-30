import { type SendZigbeeDecodedPayload } from '../../../../../../command/subsets/payload/decoded/entities/actions/send/send-zigbee-decoded-payload.js';
import { type ZigbeeDiscoverAttributesPayload } from '../../../types/zigbee-discover-attributes-payload/zigbee-discover-attributes-payload.js';

export type SendZigbeeDiscoverAttributesCommand =
  SendZigbeeDecodedPayload<ZigbeeDiscoverAttributesPayload>;
