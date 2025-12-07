import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../../../command/subsets/for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { createObserveZigbeeEmptyPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../../../command/subsets/payload/empty/interfaces/flows/observe/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-empty-payload-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import {
  ZIGBEE_CLUSTER_0x0000_COMMAND_0x00_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0000Command0x00PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0000-command-0x00.js';

import { type ObserveZigbeeResetToFactoryDefaultsCommandFlow } from '../../observe-zigbee-reset-to-factory-defaults-command.flow.js';

export interface CreateObserveZigbeeResetToFactoryDefaultsCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<ZigbeeCluster0x0000Command0x00PredefinedProperties>;
}

export function createObserveZigbeeResetToFactoryDefaultsCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
  observe,
}: CreateObserveZigbeeResetToFactoryDefaultsCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions): ObserveZigbeeResetToFactoryDefaultsCommandFlow {
  return createObserveZigbeeEmptyPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
    observe,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0000_COMMAND_0x00_PREDEFINED_PROPERTIES,
  });
}
