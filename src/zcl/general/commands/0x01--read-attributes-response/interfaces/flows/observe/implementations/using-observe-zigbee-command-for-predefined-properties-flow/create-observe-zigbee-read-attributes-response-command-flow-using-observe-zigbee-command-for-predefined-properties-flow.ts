import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../command/subsets/for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { createObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../command/subsets/payload/decoded/interfaces/flows/observe/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-decoded-payload-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import { decodeZigbeeReadAttributesResponsePayload } from '../../../../../members/zigbee-read-attributes-response-payload/codec/decode-zigbee-read-attributes-response-payload.js';
import {
  ZIGBEE_READ_ATTRIBUTES_RESPONSE_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeReadAttributesResponseCommandPredefinedProperties,
} from '../../../../../zigbee-read-attributes-response-command.js';
import { type ObserveZigbeeReadAttributesResponseCommandFlow } from '../../observe-zigbee-read-attributes-response-command.flow.js';

export interface CreateObserveZigbeeReadAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<ZigbeeReadAttributesResponseCommandPredefinedProperties>;
}

export function createObserveZigbeeReadAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
  observe,
}: CreateObserveZigbeeReadAttributesResponseCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions): ObserveZigbeeReadAttributesResponseCommandFlow {
  return createObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
    observe,
    commandPredefinedProperties: ZIGBEE_READ_ATTRIBUTES_RESPONSE_COMMAND_PREDEFINED_PROPERTIES,
    decode: decodeZigbeeReadAttributesResponsePayload,
  });
}
