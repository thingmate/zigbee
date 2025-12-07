import { createObserveZigbeeAttributeFlowUsingObserveZigbeeAttributesFlow } from '../../../../../../../../../../general/attributes/interfaces/flows/observe-attribute/implementations/using-observe-zigbee-attributes-flow/create-observe-zigbee-attribute-flow-using-observe-zigbee-attributes-flow.js';
import { type ObserveZigbeeOnOffAttributesFlow } from '../../../../../../interfaces/flows/observe/observe-zigbee-on-off-attributes.flow.js';
import { ZIGBEE_CLUSTER_0x0006_ATTRIBUTE_0x0000 } from '../../../../../zigbee-cluster-0x0006-attribute-0x0000.js';

import { type ObserveZigbeeOnOffAttributeFlow } from '../../observe-zigbee-on-off-attribute.flow.js';

export interface CreateObserveZigbeeOnOffAttributeFlowUsingObserveZigbeeOnOffAttributesFlowOptions {
  readonly observe: ObserveZigbeeOnOffAttributesFlow;
}

export function createObserveZigbeeOnOffAttributeFlowUsingObserveZigbeeOnOffAttributesFlow({
  observe,
}: CreateObserveZigbeeOnOffAttributeFlowUsingObserveZigbeeOnOffAttributesFlowOptions): ObserveZigbeeOnOffAttributeFlow {
  return createObserveZigbeeAttributeFlowUsingObserveZigbeeAttributesFlow({
    observe,
    attributeId: ZIGBEE_CLUSTER_0x0006_ATTRIBUTE_0x0000,
  });
}
