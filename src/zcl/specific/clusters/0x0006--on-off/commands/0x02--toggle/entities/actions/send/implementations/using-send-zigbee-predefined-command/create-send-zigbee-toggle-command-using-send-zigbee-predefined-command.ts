import { createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand } from '../../../../../../../../../../command/subsets/payload/empty/entities/actions/send/implementations/using-send-zigbee-predefined-command/create-send-zigbee-empty-payload-using-send-zigbee-predefined-command.js';
import { type SendZigbeePredefinedCommand } from '../../../../../../../../../../command/subsets/predefined/entities/actions/send/send-zigbee-predefined-command.js';
import {
  ZIGBEE_CLUSTER_0x0006_COMMAND_0x02_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0006Command0x02PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0006-command-0x02.js';
import { type SendZigbeeToggleCommand } from '../../send-zigbee-toggle-command.js';

export interface CreateSendZigbeeToggleCommandUsingSendZigbeePredefinedCommandOptions {
  readonly send: SendZigbeePredefinedCommand<ZigbeeCluster0x0006Command0x02PredefinedProperties>;
}

export function createSendZigbeeToggleCommandUsingSendZigbeePredefinedCommand({
  send,
}: CreateSendZigbeeToggleCommandUsingSendZigbeePredefinedCommandOptions): SendZigbeeToggleCommand {
  return createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand({
    send,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0006_COMMAND_0x02_PREDEFINED_PROPERTIES,
  });
}
