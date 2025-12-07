import {
  createObserveZigbeeAttributesFlowFilteredByClusterUsingObserveZigbeeCommandForPredefinedPropertiesFlow,
  type CreateObserveZigbeeAttributesActionFilteredByClusterUsingObserveZigbeeCommandActionForPredefinedPropertiesOptionsForConsumer,
} from '../../../../../../../../../general/attributes/interfaces/flows/observe-attributes/filtered-by-cluster/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-attributes-flow-filtered-by-cluster-using-observe-zigbee-command-for-predefined-properties-flow.js';
import { ZIGBEE_CLUSTER_0x0000 } from '../../../../../../zigbee-cluster-0x0000.js';
import { type ObserveZigbeeBasicAttributesFlow } from '../../observe-zigbee-basic-attributes.flow.js';

export interface CreateObserveZigbeeBasicAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions extends CreateObserveZigbeeAttributesActionFilteredByClusterUsingObserveZigbeeCommandActionForPredefinedPropertiesOptionsForConsumer {}

export function createObserveZigbeeBasicAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
  observe,
}: CreateObserveZigbeeBasicAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions): ObserveZigbeeBasicAttributesFlow {
  return createObserveZigbeeAttributesFlowFilteredByClusterUsingObserveZigbeeCommandForPredefinedPropertiesFlow(
    {
      observe,
      cluster: ZIGBEE_CLUSTER_0x0000,
    },
  );
}
