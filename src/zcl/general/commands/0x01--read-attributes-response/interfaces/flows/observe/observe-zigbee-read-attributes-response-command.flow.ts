import { type ObserveZigbeeDecodedPayloadFlow } from '../../../../../../command/subsets/payload/decoded/interfaces/flows/observe/observe-zigbee-decoded-payload.flow.js';
import { type ZigbeeReadAttributesResponsePayload } from '../../../members/zigbee-read-attributes-response-payload/zigbee-read-attributes-response-payload.js';

export type ObserveZigbeeReadAttributesResponseCommandFlow =
  ObserveZigbeeDecodedPayloadFlow<ZigbeeReadAttributesResponsePayload>;
