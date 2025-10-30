import { ZIGBEE_GENERAL_COMMAND_PREDEFINED_PROPERTIES } from '../zigbee-general-command.js';

export const ZIGBEE_DISCOVER_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES = Object.freeze({
  ...ZIGBEE_GENERAL_COMMAND_PREDEFINED_PROPERTIES,
  command: 0x0c,
});

export type ZigbeeDiscoverAttributesCommandPredefinedProperties =
  typeof ZIGBEE_DISCOVER_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES;
