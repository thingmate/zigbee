import {
  createSendZigbeeDiscoverAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesAction,
  type CreateSendZigbeeDiscoverAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions,
} from '../../../../../../../../../commands/0x0c--discover-attributes/interfaces/actions/send/implementations/using-send-zigbee-command-for-predefined-properties-action/create-send-zigbee-discover-attributes-command-action-using-send-zigbee-command-for-predefined-properties-action.js';
import {
  createObserveZigbeeDiscoverAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow,
  type CreateObserveZigbeeDiscoverAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions,
} from '../../../../../../../../../commands/0x0d--discover-attributes-response/interfaces/flows/observe/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-discover-attributes-response-command-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import { type DiscoverZigbeeAttributesAdapter } from '../../discover-zigbee-attributes-adapter.js';

export interface CreateDiscoverZigbeeAttributesAdapterUsingZigbeeCommandAdapterOptions
  extends
    CreateSendZigbeeDiscoverAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions,
    CreateObserveZigbeeDiscoverAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {}

export function createDiscoverZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter(
  options: CreateDiscoverZigbeeAttributesAdapterUsingZigbeeCommandAdapterOptions,
): DiscoverZigbeeAttributesAdapter {
  return {
    send: createSendZigbeeDiscoverAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesAction(
      options,
    ),
    observe:
      createObserveZigbeeDiscoverAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow(
        options,
      ),
  };
}
