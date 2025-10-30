import { createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand } from '../../../../../../../../../../command/subsets/payload/empty/entities/actions/send/implementations/using-send-zigbee-predefined-command/create-send-zigbee-empty-payload-using-send-zigbee-predefined-command.js';
import { type SendZigbeePredefinedCommand } from '../../../../../../../../../../command/subsets/predefined/entities/actions/send/send-zigbee-predefined-command.js';
import {
  ZIGBEE_CLUSTER_0x0006_COMMAND_0x01_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0006Command0x01PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0006-command-0x01.js';
import { type SendZigbeeOnCommand } from '../../send-zigbee-on-command.js';

export interface CreateSendZigbeeOnCommandUsingSendZigbeePredefinedCommandOptions {
  readonly send: SendZigbeePredefinedCommand<ZigbeeCluster0x0006Command0x01PredefinedProperties>;
}

export function createSendZigbeeOnCommandUsingSendZigbeePredefinedCommand({
  send,
}: CreateSendZigbeeOnCommandUsingSendZigbeePredefinedCommandOptions): SendZigbeeOnCommand {
  return createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand({
    send,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0006_COMMAND_0x01_PREDEFINED_PROPERTIES,
  });
}
