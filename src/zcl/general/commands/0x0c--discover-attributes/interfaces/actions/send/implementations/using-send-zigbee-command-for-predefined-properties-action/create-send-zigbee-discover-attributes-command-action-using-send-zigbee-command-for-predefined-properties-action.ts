import { type SendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../command/subsets/for-predefined-properties/interfaces/actions/send/send-zigbee-command-for-predefined-properties.action.js';
import { createSendZigbeeDecodedPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../command/subsets/payload/decoded/interfaces/actions/send/implementations/using-send-zigbee-for-predefined-command-action/create-send-zigbee-decoded-payload-action-using-send-zigbee-command-for-predefined-properties-action.js';
import { encodeZigbeeDiscoverAttributesPayload } from '../../../../../members/zigbee-discover-attributes-payload/codec/encode-zigbee-discover-attributes-payload.js';
import {
  ZIGBEE_DISCOVER_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeDiscoverAttributesCommandPredefinedProperties,
} from '../../../../../zigbee-discover-attributes-command.js';
import { type SendZigbeeDiscoverAttributesCommandAction } from '../../send-zigbee-discover-attributes-command.action.js';

export interface CreateSendZigbeeDiscoverAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions {
  readonly send: SendZigbeeCommandForPredefinedPropertiesAction<ZigbeeDiscoverAttributesCommandPredefinedProperties>;
}

export function createSendZigbeeDiscoverAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesAction({
  send,
}: CreateSendZigbeeDiscoverAttributesCommandActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions): SendZigbeeDiscoverAttributesCommandAction {
  return createSendZigbeeDecodedPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction({
    send,
    commandPredefinedProperties: ZIGBEE_DISCOVER_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
    encode: encodeZigbeeDiscoverAttributesPayload,
  });
}
