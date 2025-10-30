import { ZIGBEE_CLUSTER_SPECIFIC_COMMAND_PREDEFINED_PROPERTIES } from '../zigbee-cluster-specific-command.js';
import { ZIGBEE_CLUSTER_0x0006 } from './zigbee-cluster-0x0006.js';

export const ZIGBEE_CLUSTER_0x0006_COMMAND_PREDEFINED_PROPERTIES = Object.freeze({
  ...ZIGBEE_CLUSTER_SPECIFIC_COMMAND_PREDEFINED_PROPERTIES,
  cluster: ZIGBEE_CLUSTER_0x0006,
});

export type ZigbeeCluster0x0006CommandPredefinedProperties =
  typeof ZIGBEE_CLUSTER_0x0006_COMMAND_PREDEFINED_PROPERTIES;
