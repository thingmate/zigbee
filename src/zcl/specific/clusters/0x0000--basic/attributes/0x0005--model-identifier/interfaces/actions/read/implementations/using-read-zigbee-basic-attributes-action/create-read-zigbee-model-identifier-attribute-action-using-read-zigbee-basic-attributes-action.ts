import { createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction } from '../../../../../../../../../../general/attributes/interfaces/actions/read-attribute/implementations/using-read-zigbee-attributes-action/create-read-zigbee-attribute-action-using-read-zigbee-attributes-action.js';
import { type ReadZigbeeBasicAttributesAction } from '../../../../../../interfaces/actions/read/read-zigbee-basic-attributes.action.js';
import { ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0005 } from '../../../../../zigbee-cluster-0x0000-attribute-0x0005.js';
import { type ReadZigbeeModelIdentifierAttributeAction } from '../../read-zigbee-model-identifier-attribute.action.js';

export interface CreateReadZigbeeModelIdentifierAttributeActionUsingReadZigbeeBasicAttributesActionOptions {
  readonly read: ReadZigbeeBasicAttributesAction;
}

export function createReadZigbeeModelIdentifierAttributeActionUsingReadZigbeeBasicAttributesAction({
  read,
}: CreateReadZigbeeModelIdentifierAttributeActionUsingReadZigbeeBasicAttributesActionOptions): ReadZigbeeModelIdentifierAttributeAction {
  return createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction<string>({
    read,
    attributeId: ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0005,
  });
}
