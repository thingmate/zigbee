import { type ZigbeeReportAttributesCommandPredefinedProperties } from '../../../../../commands/0x0a--report-attributes/zigbee-report-attributes-command.js';

export interface ZigbeeReportAttributesCommandPredefinedPropertiesWithCluster
  extends ZigbeeReportAttributesCommandPredefinedProperties {
  readonly cluster: number;
}
