import { ZIGBEE_GENERAL_COMMAND_PREDEFINED_PROPERTIES } from '../zigbee-general-command.js';

export const ZIGBEE_READ_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES = Object.freeze({
  ...ZIGBEE_GENERAL_COMMAND_PREDEFINED_PROPERTIES,
  command: 0x00,
});

export type ZigbeeReadAttributesCommandPredefinedProperties =
  typeof ZIGBEE_READ_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES;
