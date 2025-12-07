import {
  createObserveZigbeeReportAttributesCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow,
  type CreateObserveZigbeeReportAttributesCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions,
} from '../../../../../../commands/0x0a--report-attributes/interfaces/flows/observe/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-report-attributes-command-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import { type ObserveZigbeeAttributesFlow } from '../../observe-zigbee-attributes.flow.js';

export interface CreateObserveZigbeeAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions extends CreateObserveZigbeeReportAttributesCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {}

export function createObserveZigbeeAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow(
  options: CreateObserveZigbeeAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions,
): ObserveZigbeeAttributesFlow {
  return createObserveZigbeeReportAttributesCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow(
    options,
  );
}
