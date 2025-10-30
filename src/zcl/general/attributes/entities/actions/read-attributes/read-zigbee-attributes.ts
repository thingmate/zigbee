import { type EntityAction } from '@thingmate/entity';
import { type ZigbeeReadAttributesPayload } from '../../../../commands/0x00--read-attributes/types/zigbee-read-attributes-payload/zigbee-read-attributes-payload.js';
import { type ZigbeeReadAttributesResponsePayload } from '../../../../commands/0x01--read-attributes-response/types/zigbee-read-attributes-response-payload/zigbee-read-attributes-response-payload.js';

export type ReadZigbeeAttributes = EntityAction<
  [payload: ZigbeeReadAttributesPayload],
  ZigbeeReadAttributesResponsePayload
>;
