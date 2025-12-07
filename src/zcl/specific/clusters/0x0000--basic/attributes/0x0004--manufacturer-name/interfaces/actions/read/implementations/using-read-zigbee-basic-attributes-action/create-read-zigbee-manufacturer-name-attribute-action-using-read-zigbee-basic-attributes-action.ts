import { createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction } from '../../../../../../../../../../general/attributes/interfaces/actions/read-attribute/implementations/using-read-zigbee-attributes-action/create-read-zigbee-attribute-action-using-read-zigbee-attributes-action.js';
import { type ReadZigbeeBasicAttributesAction } from '../../../../../../interfaces/actions/read/read-zigbee-basic-attributes.action.js';
import { ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0004 } from '../../../../../zigbee-cluster-0x0000-attribute-0x0004.js';
import { type ReadZigbeeManufacturerNameAttributeAction } from '../../read-zigbee-manufacturer-name-attribute.action.js';

export interface CreateReadZigbeeManufacturerNameAttributeActionUsingReadZigbeeBasicAttributesActionOptions {
  readonly read: ReadZigbeeBasicAttributesAction;
}

export function createReadZigbeeManufacturerNameAttributeActionUsingReadZigbeeBasicAttributesAction({
  read,
}: CreateReadZigbeeManufacturerNameAttributeActionUsingReadZigbeeBasicAttributesActionOptions): ReadZigbeeManufacturerNameAttributeAction {
  return createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction<string>({
    read,
    attributeId: ZIGBEE_CLUSTER_0x0000_ATTRIBUTE_0x0004,
  });
}
