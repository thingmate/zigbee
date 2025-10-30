import { ZIGBEE_GENERAL_COMMAND_PREDEFINED_PROPERTIES } from '../zigbee-general-command.js';

export const ZIGBEE_REPORT_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES = Object.freeze({
  ...ZIGBEE_GENERAL_COMMAND_PREDEFINED_PROPERTIES,
  command: 0x0a,
});

export type ZigbeeReportAttributesCommandPredefinedProperties =
  typeof ZIGBEE_REPORT_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES;
