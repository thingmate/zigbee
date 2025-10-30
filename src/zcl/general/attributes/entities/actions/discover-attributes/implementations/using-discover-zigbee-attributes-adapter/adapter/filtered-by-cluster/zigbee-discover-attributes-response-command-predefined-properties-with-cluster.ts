import { type ZigbeeDiscoverAttributesResponseCommandPredefinedProperties } from '../../../../../../../../commands/0x0d--discover-attributes-response/zigbee-discover-attributes-response-command.js';

export interface ZigbeeDiscoverAttributesResponseCommandPredefinedPropertiesWithCluster
  extends ZigbeeDiscoverAttributesResponseCommandPredefinedProperties {
  readonly cluster: number;
}
