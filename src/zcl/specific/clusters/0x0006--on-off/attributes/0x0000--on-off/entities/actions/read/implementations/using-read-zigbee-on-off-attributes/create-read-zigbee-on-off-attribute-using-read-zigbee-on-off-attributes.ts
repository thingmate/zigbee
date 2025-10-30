import { createReadZigbeeAttributeUsingReadZigbeeAttributes } from '../../../../../../../../../../general/attributes/entities/actions/read-attribute/implementations/using-read-zigbee-attributes/create-read-zigbee-attribute-using-read-zigbee-attributes.js';
import { type ReadZigbeeOnOffAttributes } from '../../../../../../entities/actions/read/read-zigbee-on-off-attributes.js';
import { ZIGBEE_CLUSTER_0x0006_ATTRIBUTE_0x0000 } from '../../../../../zigbee-cluster-0x0006-attribute-0x0000.js';
import { type ReadZigbeeOnOffAttribute } from '../../read-zigbee-on-off-attribute.js';

export interface CreateReadZigbeeOnOffAttributeUsingReadZigbeeOnOffAttributesOptions {
  readonly read: ReadZigbeeOnOffAttributes;
}

export function createReadZigbeeOnOffAttributeUsingReadZigbeeOnOffAttributes({
  read,
}: CreateReadZigbeeOnOffAttributeUsingReadZigbeeOnOffAttributesOptions): ReadZigbeeOnOffAttribute {
  return createReadZigbeeAttributeUsingReadZigbeeAttributes<boolean>({
    read,
    attributeId: ZIGBEE_CLUSTER_0x0006_ATTRIBUTE_0x0000,
  });
}
