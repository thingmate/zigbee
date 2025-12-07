import { createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction } from '../../../../../../../../../../general/attributes/interfaces/actions/read-attribute/implementations/using-read-zigbee-attributes-action/create-read-zigbee-attribute-action-using-read-zigbee-attributes-action.js';
import { type ReadZigbeeBasicAttributesAction } from '../../../../../../interfaces/actions/read/read-zigbee-basic-attributes.action.js';
import { ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0000 } from '../../../../../zigbee-cluster-0x0000-attribute-0x0000.js';
import { type ReadZigbeeZclVersionAttributeAction } from '../../read-zigbee-zcl-version-attribute.action.js';

export interface CreateReadZigbeeZclVersionAttributeActionUsingReadZigbeeBasicAttributesActionOptions {
  readonly read: ReadZigbeeBasicAttributesAction;
}

export function createReadZigbeeZclVersionAttributeActionUsingReadZigbeeBasicAttributesAction({
  read,
}: CreateReadZigbeeZclVersionAttributeActionUsingReadZigbeeBasicAttributesActionOptions): ReadZigbeeZclVersionAttributeAction {
  return createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction<number>({
    read,
    attributeId: ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0000,
  });
}
