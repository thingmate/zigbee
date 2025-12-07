import { type SendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../command/subsets/for-predefined-properties/interfaces/actions/send/send-zigbee-command-for-predefined-properties.action.js';
import { createSendZigbeeDecodedPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../command/subsets/payload/decoded/interfaces/actions/send/implementations/using-send-zigbee-for-predefined-command-action/create-send-zigbee-decoded-payload-action-using-send-zigbee-command-for-predefined-properties-action.js';
import { encodeZigbeeReadAttributesPayload } from '../../../../../members/zigbee-read-attributes-payload/codec/encode-zigbee-read-attributes-payload.js';
import { type ZigbeeReadAttributesPayload } from '../../../../../members/zigbee-read-attributes-payload/zigbee-read-attributes-payload.js';
import {
  ZIGBEE_READ_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeReadAttributesCommandPredefinedProperties,
} from '../../../../../zigbee-read-attributes-command.js';
import { type SendZigbeeReadAttributesCommandAction } from '../../send-zigbee-read-attributes-command.action.js';

export interface CreateSendZigbeeReadAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions {
  readonly send: SendZigbeeCommandForPredefinedPropertiesAction<ZigbeeReadAttributesCommandPredefinedProperties>;
}

export function createSendZigbeeReadAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesAction({
  send,
}: CreateSendZigbeeReadAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions): SendZigbeeReadAttributesCommandAction {
  return createSendZigbeeDecodedPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction<
    ZigbeeReadAttributesCommandPredefinedProperties,
    ZigbeeReadAttributesPayload
  >({
    send,
    commandPredefinedProperties: ZIGBEE_READ_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
    encode: encodeZigbeeReadAttributesPayload,
  });
}
