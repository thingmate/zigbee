import { createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction } from '../../../../../../../../../../general/attributes/interfaces/actions/read-attribute/implementations/using-read-zigbee-attributes-action/create-read-zigbee-attribute-action-using-read-zigbee-attributes-action.js';
import { type ReadZigbeeOnOffAttributesAction } from '../../../../../../interfaces/actions/read/read-zigbee-on-off-attributes.action.js';
import { ZIGBEE_CLUSTER_0x0006_ATTRIBUTE_0x0000 } from '../../../../../zigbee-cluster-0x0006-attribute-0x0000.js';
import { type ReadZigbeeOnOffAttributeAction } from '../../read-zigbee-on-off-attribute.action.js';

export interface CreateReadZigbeeOnOffAttributeActionUsingReadZigbeeOnOffAttributesActionOptions {
  readonly read: ReadZigbeeOnOffAttributesAction;
}

export function createReadZigbeeOnOffAttributeActionUsingReadZigbeeOnOffAttributesAction({
  read,
}: CreateReadZigbeeOnOffAttributeActionUsingReadZigbeeOnOffAttributesActionOptions): ReadZigbeeOnOffAttributeAction {
  return createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction<boolean>({
    read,
    attributeId: ZIGBEE_CLUSTER_0x0006_ATTRIBUTE_0x0000,
  });
}
