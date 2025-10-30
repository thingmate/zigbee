import { type ZigbeeDiscoverAttributesCommandPredefinedProperties } from '../../../../../../../../commands/0x0c--discover-attributes/zigbee-discover-attributes-command.js';

export interface ZigbeeDiscoverAttributesCommandPredefinedPropertiesWithCluster
  extends ZigbeeDiscoverAttributesCommandPredefinedProperties {
  readonly cluster: number;
}
