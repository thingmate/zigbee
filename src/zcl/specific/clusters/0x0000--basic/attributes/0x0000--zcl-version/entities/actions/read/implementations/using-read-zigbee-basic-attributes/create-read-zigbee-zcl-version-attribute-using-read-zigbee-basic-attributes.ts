import { createReadZigbeeAttributeUsingReadZigbeeAttributes } from '../../../../../../../../../../general/attributes/entities/actions/read-attribute/implementations/using-read-zigbee-attributes/create-read-zigbee-attribute-using-read-zigbee-attributes.js';
import { type ReadZigbeeBasicAttributes } from '../../../../../../entities/actions/read/read-zigbee-basic-attributes.js';
import { ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0000 } from '../../../../../zigbee-cluster-0x0000-attribute-0x0000.js';
import { type ReadZigbeeZclVersionAttribute } from '../../read-zigbee-zcl-version-attribute.js';

export interface CreateReadZigbeeZclVersionAttributeUsingReadZigbeeBasicAttributesOptions {
  readonly read: ReadZigbeeBasicAttributes;
}

export function createReadZigbeeZclVersionAttributeUsingReadZigbeeBasicAttributes({
  read,
}: CreateReadZigbeeZclVersionAttributeUsingReadZigbeeBasicAttributesOptions): ReadZigbeeZclVersionAttribute {
  return createReadZigbeeAttributeUsingReadZigbeeAttributes<number>({
    read,
    attributeId: ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0000,
  });
}
