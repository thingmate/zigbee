import { createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand } from '../../../../../../../../../../command/subsets/payload/empty/entities/actions/send/implementations/using-send-zigbee-predefined-command/create-send-zigbee-empty-payload-using-send-zigbee-predefined-command.js';
import { type SendZigbeePredefinedCommand } from '../../../../../../../../../../command/subsets/predefined/entities/actions/send/send-zigbee-predefined-command.js';
import {
  ZIGBEE_CLUSTER_0x0000_COMMAND_0x00_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0000Command0x00PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0000-command-0x00.js';
import { type SendZigbeeResetToFactoryDefaultsCommand } from '../../send-zigbee-reset-to-factory-defaults-command.js';

export interface CreateSendZigbeeResetToFactoryDefaultsCommandUsingSendZigbeePredefinedCommandOptions {
  readonly send: SendZigbeePredefinedCommand<ZigbeeCluster0x0000Command0x00PredefinedProperties>;
}

export function createSendZigbeeResetToFactoryDefaultsCommandUsingSendZigbeePredefinedCommand({
  send,
}: CreateSendZigbeeResetToFactoryDefaultsCommandUsingSendZigbeePredefinedCommandOptions): SendZigbeeResetToFactoryDefaultsCommand {
  return createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand({
    send,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0000_COMMAND_0x00_PREDEFINED_PROPERTIES,
  });
}
