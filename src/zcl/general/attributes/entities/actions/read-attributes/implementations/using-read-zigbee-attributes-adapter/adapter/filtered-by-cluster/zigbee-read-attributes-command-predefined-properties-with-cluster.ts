import { type ZigbeeReadAttributesCommandPredefinedProperties } from '../../../../../../../../commands/0x00--read-attributes/zigbee-read-attributes-command.js';

export interface ZigbeeReadAttributesCommandPredefinedPropertiesWithCluster
  extends ZigbeeReadAttributesCommandPredefinedProperties {
  readonly cluster: number;
}
