import { type SendZigbeeDecodedPayloadAction } from '../../../../../../command/subsets/payload/decoded/interfaces/actions/send/send-zigbee-decoded-payload.action.js';
import { type ZigbeeDiscoverAttributesPayload } from '../../../members/zigbee-discover-attributes-payload/zigbee-discover-attributes-payload.js';

export type SendZigbeeDiscoverAttributesCommandAction =
  SendZigbeeDecodedPayloadAction<ZigbeeDiscoverAttributesPayload>;
