import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../command/subsets/for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { createObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../command/subsets/payload/decoded/interfaces/flows/observe/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-decoded-payload-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import { decodeZigbeeDiscoverAttributesResponsePayload } from '../../../../../members/zigbee-discover-attributes-response-payload/codec/decode-zigbee-discover-attributes-response-payload.js';
import {
  ZIGBEE_DISCOVER_ATTRIBUTES_RESPONSE_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeDiscoverAttributesResponseCommandPredefinedProperties,
} from '../../../../../zigbee-discover-attributes-response-command.js';
import { type ObserveZigbeeDiscoverAttributesResponseCommandFlow } from '../../observe-zigbee-discover-attributes-response-command.flow.js';

export interface CreateObserveZigbeeDiscoverAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<ZigbeeDiscoverAttributesResponseCommandPredefinedProperties>;
}

export function createObserveZigbeeDiscoverAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
  observe,
}: CreateObserveZigbeeDiscoverAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions): ObserveZigbeeDiscoverAttributesResponseCommandFlow {
  return createObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
    observe,
    commandPredefinedProperties: ZIGBEE_DISCOVER_ATTRIBUTES_RESPONSE_COMMAND_PREDEFINED_PROPERTIES,
    decode: decodeZigbeeDiscoverAttributesResponsePayload,
  });
}
