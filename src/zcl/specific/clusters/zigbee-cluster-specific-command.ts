import { ZIGBEE_REPORT_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES } from '../../general/commands/0x0a--report-attributes/zigbee-report-attributes-command.js';

export const ZIGBEE_CLUSTER_SPECIFIC_COMMAND_PREDEFINED_PROPERTIES = Object.freeze({
  clusterSpecific: true,
});

export type ZigbeeClusterSpecificCommandPredefinedProperties =
  typeof ZIGBEE_REPORT_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES;
