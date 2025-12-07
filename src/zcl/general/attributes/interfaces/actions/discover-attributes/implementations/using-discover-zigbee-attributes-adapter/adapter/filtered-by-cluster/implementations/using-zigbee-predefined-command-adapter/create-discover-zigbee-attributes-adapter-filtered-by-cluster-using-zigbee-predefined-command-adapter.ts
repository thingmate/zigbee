import { type SendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../../../../command/subsets/for-predefined-properties/interfaces/actions/send/send-zigbee-command-for-predefined-properties.action.js';
import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../../../../command/subsets/for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../../../../../../../../../command/subsets/for-predefined-properties/zigbee-command-for-predefined-properties.js';
import { type ZigbeeDiscoverAttributesCommandPredefinedProperties } from '../../../../../../../../../../commands/0x0c--discover-attributes/zigbee-discover-attributes-command.js';
import { type DiscoverZigbeeAttributesAdapter } from '../../../discover-zigbee-attributes-adapter.js';
import { createDiscoverZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter } from '../../../implementations/using-zigbee-predefined-command-adapter/create-discover-zigbee-attributes-adapter-using-zigbee-predefined-command-adapter.js';
import { type ZigbeeDiscoverAttributesCommandPredefinedPropertiesWithCluster } from '../../zigbee-discover-attributes-command-predefined-properties-with-cluster.js';
import { type ZigbeeDiscoverAttributesResponseCommandPredefinedPropertiesWithCluster } from '../../zigbee-discover-attributes-response-command-predefined-properties-with-cluster.js';

export interface CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions {
  readonly send: SendZigbeeCommandForPredefinedPropertiesAction<ZigbeeDiscoverAttributesCommandPredefinedPropertiesWithCluster>;
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<ZigbeeDiscoverAttributesResponseCommandPredefinedPropertiesWithCluster>;
  readonly cluster: number;
}

export function createDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
  send,
  observe,
  cluster,
}: CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions): DiscoverZigbeeAttributesAdapter {
  return createDiscoverZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter({
    send: send.mapArguments(
      (
        command: ZigbeeCommandForPredefinedProperties<ZigbeeDiscoverAttributesCommandPredefinedProperties>,
      ): [
        command: ZigbeeCommandForPredefinedProperties<ZigbeeDiscoverAttributesResponseCommandPredefinedPropertiesWithCluster>,
      ] => {
        return [
          {
            ...command,
            cluster,
          },
        ];
      },
    ),
    observe: observe.filter(
      (
        command: ZigbeeCommandForPredefinedProperties<ZigbeeDiscoverAttributesResponseCommandPredefinedPropertiesWithCluster>,
      ): boolean => {
        return command.cluster === cluster;
      },
    ),
  });
}

/*---*/

export type CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer =
  Omit<
    CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions,
    'cluster'
  >;
