import { type SendZigbeeDecodedPayloadAction } from '../../../../../../command/subsets/payload/decoded/interfaces/actions/send/send-zigbee-decoded-payload.action.js';
import { type ZigbeeReadAttributesPayload } from '../../../members/zigbee-read-attributes-payload/zigbee-read-attributes-payload.js';

export type SendZigbeeReadAttributesCommandAction =
  SendZigbeeDecodedPayloadAction<ZigbeeReadAttributesPayload>;
