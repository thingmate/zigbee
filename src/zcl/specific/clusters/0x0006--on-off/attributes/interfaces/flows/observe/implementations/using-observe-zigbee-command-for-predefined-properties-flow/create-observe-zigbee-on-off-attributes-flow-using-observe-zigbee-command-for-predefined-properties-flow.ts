import {
  createObserveZigbeeAttributesFlowFilteredByClusterUsingObserveZigbeeCommandForPredefinedPropertiesFlow,
  type CreateObserveZigbeeAttributesActionFilteredByClusterUsingObserveZigbeeCommandActionForPredefinedPropertiesOptionsForConsumer,
} from '../../../../../../../../../general/attributes/interfaces/flows/observe-attributes/filtered-by-cluster/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-attributes-flow-filtered-by-cluster-using-observe-zigbee-command-for-predefined-properties-flow.js';

import { ZIGBEE_CLUSTER_0x0006 } from '../../../../../../zigbee-cluster-0x0006.js';
import { type ObserveZigbeeOnOffAttributesFlow } from '../../observe-zigbee-on-off-attributes.flow.js';

export interface CreateObserveZigbeeOnOffAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions extends CreateObserveZigbeeAttributesActionFilteredByClusterUsingObserveZigbeeCommandActionForPredefinedPropertiesOptionsForConsumer {}

export function createObserveZigbeeOnOffAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
  observe,
}: CreateObserveZigbeeOnOffAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions): ObserveZigbeeOnOffAttributesFlow {
  return createObserveZigbeeAttributesFlowFilteredByClusterUsingObserveZigbeeCommandForPredefinedPropertiesFlow(
    {
      observe,
      cluster: ZIGBEE_CLUSTER_0x0006,
    },
  );
}
