import {
  createSendZigbeeReadAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesAction,
  type CreateSendZigbeeReadAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions,
} from '../../../../../../../../../commands/0x00--read-attributes/interfaces/actions/send/implementations/using-send-zigbee-command-for-predefined-properties-action/create-send-zigbee-read-attributes-command-action-using-send-zigbee-command-for-predefined-properties-action.js';
import {
  createObserveZigbeeReadAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow,
  type CreateObserveZigbeeReadAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions,
} from '../../../../../../../../../commands/0x01--read-attributes-response/interfaces/flows/observe/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-read-attributes-response-command-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import { type ReadZigbeeAttributesAdapter } from '../../read-zigbee-attributes-adapter.js';

export interface CreateReadZigbeeAttributesAdapterUsingZigbeeCommandAdapterOptions
  extends
    CreateSendZigbeeReadAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions,
    CreateObserveZigbeeReadAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {}

export function createReadZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter(
  options: CreateReadZigbeeAttributesAdapterUsingZigbeeCommandAdapterOptions,
): ReadZigbeeAttributesAdapter {
  return {
    send: createSendZigbeeReadAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesAction(
      options,
    ),
    observe:
      createObserveZigbeeReadAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow(
        options,
      ),
  };
}
