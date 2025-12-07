import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../command/subsets/for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../../../../../../command/subsets/for-predefined-properties/zigbee-command-for-predefined-properties.js';
import { createObserveZigbeeAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../implementations/using-observe-zigbee-command-for-predefined-properties-flow/create-observe-zigbee-attributes-flow-using-observe-zigbee-command-for-predefined-properties-flow.js';
import { type ObserveZigbeeAttributesFlow } from '../../../observe-zigbee-attributes.flow.js';
import { type ZigbeeReportAttributesCommandPredefinedPropertiesWithCluster } from '../../zigbee-report-attributes-command-predefined-properties-with-cluster.js';

export interface CreateObserveZigbeeAttributesFlowFilteredByClusterUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions {
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<ZigbeeReportAttributesCommandPredefinedPropertiesWithCluster>;
  readonly cluster: number;
}

export function createObserveZigbeeAttributesFlowFilteredByClusterUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
  observe,
  cluster,
}: CreateObserveZigbeeAttributesFlowFilteredByClusterUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions): ObserveZigbeeAttributesFlow {
  return createObserveZigbeeAttributesFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow({
    observe: observe.filter(
      (
        command: ZigbeeCommandForPredefinedProperties<ZigbeeReportAttributesCommandPredefinedPropertiesWithCluster>,
      ): boolean => {
        return command.cluster === cluster;
      },
    ),
  });
}

/*---*/

export type CreateObserveZigbeeAttributesActionFilteredByClusterUsingObserveZigbeeCommandActionForPredefinedPropertiesOptionsForConsumer =
  Omit<
    CreateObserveZigbeeAttributesFlowFilteredByClusterUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions,
    'cluster'
  >;
