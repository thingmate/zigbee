import { createSendZigbeeDecodedPayloadUsingSendZigbeePredefinedCommand } from '../../../../../../../../command/subsets/payload/decoded/entities/actions/send/implementations/using-send-zigbee-predefined-command/create-send-zigbee-decoded-payload-using-send-zigbee-predefined-command.js';
import { type SendZigbeePredefinedCommand } from '../../../../../../../../command/subsets/predefined/entities/actions/send/send-zigbee-predefined-command.js';
import { encodeZigbeeDiscoverAttributesPayload } from '../../../../../types/zigbee-discover-attributes-payload/codec/encode-zigbee-discover-attributes-payload.js';
import {
  ZIGBEE_DISCOVER_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeDiscoverAttributesCommandPredefinedProperties,
} from '../../../../../zigbee-discover-attributes-command.js';
import { type SendZigbeeDiscoverAttributesCommand } from '../../send-zigbee-discover-attributes-command.js';

export interface CreateSendZigbeeDiscoverAttributesCommandUsingSendZigbeePredefinedCommandOptions {
  readonly send: SendZigbeePredefinedCommand<ZigbeeDiscoverAttributesCommandPredefinedProperties>;
}

export function createSendZigbeeDiscoverAttributesCommandUsingSendZigbeePredefinedCommand({
  send,
}: CreateSendZigbeeDiscoverAttributesCommandUsingSendZigbeePredefinedCommandOptions): SendZigbeeDiscoverAttributesCommand {
  return createSendZigbeeDecodedPayloadUsingSendZigbeePredefinedCommand({
    send,
    commandPredefinedProperties: ZIGBEE_DISCOVER_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
    encode: encodeZigbeeDiscoverAttributesPayload,
  });
}
