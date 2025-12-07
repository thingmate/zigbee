import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../command/subsets/for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { createObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../command/subsets/payload/decoded/interfaces/flows/observe/implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-decoded-payload-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import { decodeZigbeeReportAttributesPayload } from '../../../../../members/zigbee-report-attributes-payload/codec/decode-zigbee-report-attributes-payload.js';
import {
  ZIGBEE_REPORT_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeReportAttributesCommandPredefinedProperties,
} from '../../../../../zigbee-report-attributes-command.js';
import { type ObserveZigbeeReportAttributesCommandFlow } from '../../observe-zigbee-report-attributes-command.flow.js';

export interface CreateObserveZigbeeReportAttributesCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<ZigbeeReportAttributesCommandPredefinedProperties>;
}

export function createObserveZigbeeReportAttributesCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
  observe,
}: CreateObserveZigbeeReportAttributesCommandFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions): ObserveZigbeeReportAttributesCommandFlow {
  return createObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
    observe,
    commandPredefinedProperties: ZIGBEE_REPORT_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
    decode: decodeZigbeeReportAttributesPayload,
  });
}
