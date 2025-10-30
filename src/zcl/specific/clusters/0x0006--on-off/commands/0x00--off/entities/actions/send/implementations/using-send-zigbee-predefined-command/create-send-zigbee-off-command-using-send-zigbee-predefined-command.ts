import { createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand } from '../../../../../../../../../../command/subsets/payload/empty/entities/actions/send/implementations/using-send-zigbee-predefined-command/create-send-zigbee-empty-payload-using-send-zigbee-predefined-command.js';
import { type SendZigbeePredefinedCommand } from '../../../../../../../../../../command/subsets/predefined/entities/actions/send/send-zigbee-predefined-command.js';
import {
  ZIGBEE_CLUSTER_0x0006_COMMAND_0x00_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0006Command0x00PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0006-command-0x00.js';
import { type SendZigbeeOffCommand } from '../../send-zigbee-off-command.js';

export interface CreateSendZigbeeOffCommandUsingSendZigbeePredefinedCommandOptions {
  readonly send: SendZigbeePredefinedCommand<ZigbeeCluster0x0006Command0x00PredefinedProperties>;
}

export function createSendZigbeeOffCommandUsingSendZigbeePredefinedCommand({
  send,
}: CreateSendZigbeeOffCommandUsingSendZigbeePredefinedCommandOptions): SendZigbeeOffCommand {
  return createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand({
    send,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0006_COMMAND_0x00_PREDEFINED_PROPERTIES,
  });
}
