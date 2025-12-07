import { type SendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../../../command/subsets/for-predefined-properties/interfaces/actions/send/send-zigbee-command-for-predefined-properties.action.js';
import { createSendZigbeeEmptyPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../../../command/subsets/payload/empty/interfaces/actions/send/implementations/using-send-zigbee-command-for-predefined-properties-action/create-send-zigbee-empty-payload-action-using-send-zigbee-command-for-predefined-properties-action.js';
import {
  ZIGBEE_CLUSTER_0x0006_COMMAND_0x01_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0006Command0x01PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0006-command-0x01.js';
import { type SendZigbeeOnCommandAction } from '../../send-zigbee-on-command.action.js';

export interface CreateSendZigbeeOnCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions {
  readonly send: SendZigbeeCommandForPredefinedPropertiesAction<ZigbeeCluster0x0006Command0x01PredefinedProperties>;
}

export function createSendZigbeeOnCommandActionUsingSendZigbeeCommandForPredefinedPropertiesAction({
  send,
}: CreateSendZigbeeOnCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions): SendZigbeeOnCommandAction {
  return createSendZigbeeEmptyPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction({
    send,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0006_COMMAND_0x01_PREDEFINED_PROPERTIES,
  });
}
