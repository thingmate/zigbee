import { type ZigbeeReadAttributesResponseCommandPredefinedProperties } from '../../../../../../../../commands/0x01--read-attributes-response/zigbee-read-attributes-response-command.js';

export interface ZigbeeReadAttributesResponseCommandPredefinedPropertiesWithCluster extends ZigbeeReadAttributesResponseCommandPredefinedProperties {
  readonly cluster: number;
}
