import { type SendZigbeeDecodedPayload } from '../../../../../../command/subsets/payload/decoded/entities/actions/send/send-zigbee-decoded-payload.js';
import { type ZigbeeReadAttributesPayload } from '../../../types/zigbee-read-attributes-payload/zigbee-read-attributes-payload.js';

export type SendZigbeeReadAttributesCommand = SendZigbeeDecodedPayload<ZigbeeReadAttributesPayload>;
