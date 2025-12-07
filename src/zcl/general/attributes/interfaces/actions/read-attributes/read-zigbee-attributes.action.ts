import { type Action } from '@xstd/action';
import { type ZigbeeReadAttributesPayload } from '../../../../commands/0x00--read-attributes/members/zigbee-read-attributes-payload/zigbee-read-attributes-payload.js';
import { type ZigbeeReadAttributesResponsePayload } from '../../../../commands/0x01--read-attributes-response/members/zigbee-read-attributes-response-payload/zigbee-read-attributes-response-payload.js';

export type ReadZigbeeAttributesAction = Action<
  [payload: ZigbeeReadAttributesPayload],
  ZigbeeReadAttributesResponsePayload
>;
