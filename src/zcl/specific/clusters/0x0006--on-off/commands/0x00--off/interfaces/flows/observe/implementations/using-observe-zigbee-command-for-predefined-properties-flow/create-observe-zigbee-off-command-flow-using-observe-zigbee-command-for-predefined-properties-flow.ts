import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../../../command/subsets/for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { createObserveZigbeeEmptyPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../../../command/subsets/payload/empty/interfaces/flows/observe/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-empty-payload-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import {
  ZIGBEE_CLUSTER_0x0006_COMMAND_0x00_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0006Command0x00PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0006-command-0x00.js';

import { type ObserveZigbeeOffCommandFlow } from '../../observe-zigbee-off-command.flow.js';

export interface CreateObserveZigbeeOffCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<ZigbeeCluster0x0006Command0x00PredefinedProperties>;
}

export function createObserveZigbeeOffCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
  observe,
}: CreateObserveZigbeeOffCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions): ObserveZigbeeOffCommandFlow {
  return createObserveZigbeeEmptyPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
    observe,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0006_COMMAND_0x00_PREDEFINED_PROPERTIES,
  });
}
