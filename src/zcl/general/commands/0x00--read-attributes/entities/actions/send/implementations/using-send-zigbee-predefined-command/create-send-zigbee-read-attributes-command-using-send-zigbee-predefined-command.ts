import { createSendZigbeeDecodedPayloadUsingSendZigbeePredefinedCommand } from '../../../../../../../../command/subsets/payload/decoded/entities/actions/send/implementations/using-send-zigbee-predefined-command/create-send-zigbee-decoded-payload-using-send-zigbee-predefined-command.js';
import { type SendZigbeePredefinedCommand } from '../../../../../../../../command/subsets/predefined/entities/actions/send/send-zigbee-predefined-command.js';
import { encodeZigbeeReadAttributesPayload } from '../../../../../types/zigbee-read-attributes-payload/codec/encode-zigbee-read-attributes-payload.js';
import {
  ZIGBEE_READ_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeReadAttributesCommandPredefinedProperties,
} from '../../../../../zigbee-read-attributes-command.js';
import { type SendZigbeeReadAttributesCommand } from '../../send-zigbee-read-attributes-command.js';

export interface CreateSendZigbeeReadAttributesCommandUsingSendZigbeePredefinedCommandOptions {
  readonly send: SendZigbeePredefinedCommand<ZigbeeReadAttributesCommandPredefinedProperties>;
}

export function createSendZigbeeReadAttributesCommandUsingSendZigbeePredefinedCommand({
  send,
}: CreateSendZigbeeReadAttributesCommandUsingSendZigbeePredefinedCommandOptions): SendZigbeeReadAttributesCommand {
  return createSendZigbeeDecodedPayloadUsingSendZigbeePredefinedCommand({
    send,
    commandPredefinedProperties: ZIGBEE_READ_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
    encode: encodeZigbeeReadAttributesPayload,
  });
}
