import { createReadZigbeeAttributeUsingReadZigbeeAttributes } from '../../../../../../../../../../general/attributes/entities/actions/read-attribute/implementations/using-read-zigbee-attributes/create-read-zigbee-attribute-using-read-zigbee-attributes.js';
import { type ReadZigbeeBasicAttributes } from '../../../../../../entities/actions/read/read-zigbee-basic-attributes.js';
import { ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0004 } from '../../../../../zigbee-cluster-0x0000-attribute-0x0004.js';
import { type ReadZigbeeManufacturerNameAttribute } from '../../read-zigbee-manufacturer-name-attribute.js';

export interface CreateReadZigbeeManufacturerNameAttributeUsingReadZigbeeBasicAttributesOptions {
  readonly read: ReadZigbeeBasicAttributes;
}

export function createReadZigbeeManufacturerNameAttributeUsingReadZigbeeBasicAttributes({
  read,
}: CreateReadZigbeeManufacturerNameAttributeUsingReadZigbeeBasicAttributesOptions): ReadZigbeeManufacturerNameAttribute {
  return createReadZigbeeAttributeUsingReadZigbeeAttributes<string>({
    read,
    attributeId: ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0004,
  });
}
