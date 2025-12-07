import { type SendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../../../../../command/subsets/for-predefined-properties/interfaces/actions/send/send-zigbee-command-for-predefined-properties.action.js';
import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../../../../../command/subsets/for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../../../../../../../../../command/subsets/for-predefined-properties/zigbee-command-for-predefined-properties.js';
import { type ZigbeeReadAttributesCommandPredefinedProperties } from '../../../../../../../../../../commands/0x00--read-attributes/zigbee-read-attributes-command.js';
import { createReadZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter } from '../../../implementations/using-zigbee-predefined-command-adapter/create-read-zigbee-attributes-adapter-using-zigbee-predefined-command-adapter.js';
import { type ReadZigbeeAttributesAdapter } from '../../../read-zigbee-attributes-adapter.js';
import { type ZigbeeReadAttributesCommandPredefinedPropertiesWithCluster } from '../../zigbee-read-attributes-command-predefined-properties-with-cluster.js';
import { type ZigbeeReadAttributesResponseCommandPredefinedPropertiesWithCluster } from '../../zigbee-read-attributes-response-command-predefined-properties-with-cluster.js';

export interface CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions {
  readonly send: SendZigbeeCommandForPredefinedPropertiesAction<ZigbeeReadAttributesCommandPredefinedPropertiesWithCluster>;
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<ZigbeeReadAttributesResponseCommandPredefinedPropertiesWithCluster>;
  readonly cluster: number;
}

export function createReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
  send,
  observe,
  cluster,
}: CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions): ReadZigbeeAttributesAdapter {
  return createReadZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter({
    send: send.mapArguments(
      (
        command: ZigbeeCommandForPredefinedProperties<ZigbeeReadAttributesCommandPredefinedProperties>,
      ): [
        command: ZigbeeCommandForPredefinedProperties<ZigbeeReadAttributesCommandPredefinedPropertiesWithCluster>,
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
        command: ZigbeeCommandForPredefinedProperties<ZigbeeReadAttributesResponseCommandPredefinedPropertiesWithCluster>,
      ): boolean => {
        return command.cluster === cluster;
      },
    ),
  });
}

/*---*/

export type CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer =
  Omit<
    CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions,
    'cluster'
  >;
