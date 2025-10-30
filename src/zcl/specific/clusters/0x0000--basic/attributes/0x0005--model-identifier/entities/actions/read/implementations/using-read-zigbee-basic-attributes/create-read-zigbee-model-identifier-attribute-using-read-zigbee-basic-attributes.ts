import { createReadZigbeeAttributeUsingReadZigbeeAttributes } from '../../../../../../../../../../general/attributes/entities/actions/read-attribute/implementations/using-read-zigbee-attributes/create-read-zigbee-attribute-using-read-zigbee-attributes.js';
import { type ReadZigbeeBasicAttributes } from '../../../../../../entities/actions/read/read-zigbee-basic-attributes.js';
import { ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0005 } from '../../../../../zigbee-cluster-0x0000-attribute-0x0005.js';
import { type ReadZigbeeModelIdentifierAttribute } from '../../read-zigbee-model-identifier-attribute.js';

export interface CreateReadZigbeeModelIdentifierAttributeUsingReadZigbeeBasicAttributesOptions {
  readonly read: ReadZigbeeBasicAttributes;
}

export function createReadZigbeeModelIdentifierAttributeUsingReadZigbeeBasicAttributes({
  read,
}: CreateReadZigbeeModelIdentifierAttributeUsingReadZigbeeBasicAttributesOptions): ReadZigbeeModelIdentifierAttribute {
  return createReadZigbeeAttributeUsingReadZigbeeAttributes<string>({
    read,
    attributeId: ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0005,
  });
}
