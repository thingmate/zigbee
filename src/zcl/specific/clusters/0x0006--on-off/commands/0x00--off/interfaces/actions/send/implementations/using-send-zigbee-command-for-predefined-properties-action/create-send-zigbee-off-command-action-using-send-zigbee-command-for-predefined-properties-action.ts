import { type SendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../../../command/subsets/for-predefined-properties/interfaces/actions/send/send-zigbee-command-for-predefined-properties.action.js';
import { createSendZigbeeEmptyPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../../../command/subsets/payload/empty/interfaces/actions/send/implementations/using-send-zigbee-command-for-predefined-properties-action/create-send-zigbee-empty-payload-action-using-send-zigbee-command-for-predefined-properties-action.js';
import {
  ZIGBEE_CLUSTER_0x0006_COMMAND_0x00_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0006Command0x00PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0006-command-0x00.js';
import { type SendZigbeeOffCommandAction } from '../../send-zigbee-off-command.action.js';

export interface CreateSendZigbeeOffCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions {
  readonly send: SendZigbeeCommandForPredefinedPropertiesAction<ZigbeeCluster0x0006Command0x00PredefinedProperties>;
}

export function createSendZigbeeOffCommandActionUsingSendZigbeeCommandForPredefinedPropertiesAction({
  send,
}: CreateSendZigbeeOffCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions): SendZigbeeOffCommandAction {
  return createSendZigbeeEmptyPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction({
    send,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0006_COMMAND_0x00_PREDEFINED_PROPERTIES,
  });
}
