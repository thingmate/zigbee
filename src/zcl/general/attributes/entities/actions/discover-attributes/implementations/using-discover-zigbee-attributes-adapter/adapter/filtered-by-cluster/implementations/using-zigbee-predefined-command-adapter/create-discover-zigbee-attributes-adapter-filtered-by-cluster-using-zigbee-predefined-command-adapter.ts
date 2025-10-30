import { type SendZigbeePredefinedCommand } from '../../../../../../../../../../../command/subsets/predefined/entities/actions/send/send-zigbee-predefined-command.js';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommand } from '../../../../../../../../../../../command/subsets/predefined/zigbee-predefined-command.js';
import { type ZigbeeDiscoverAttributesCommandPredefinedProperties } from '../../../../../../../../../../commands/0x0c--discover-attributes/zigbee-discover-attributes-command.js';
import { type DiscoverZigbeeAttributesAdapter } from '../../../discover-zigbee-attributes-adapter.js';
import { createDiscoverZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter } from '../../../implementations/using-zigbee-predefined-command-adapter/create-discover-zigbee-attributes-adapter-using-zigbee-predefined-command-adapter.js';
import { type ZigbeeDiscoverAttributesCommandPredefinedPropertiesWithCluster } from '../../zigbee-discover-attributes-command-predefined-properties-with-cluster.js';
import { type ZigbeeDiscoverAttributesResponseCommandPredefinedPropertiesWithCluster } from '../../zigbee-discover-attributes-response-command-predefined-properties-with-cluster.js';

export interface CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions {
  readonly send: SendZigbeePredefinedCommand<ZigbeeDiscoverAttributesCommandPredefinedPropertiesWithCluster>;
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeDiscoverAttributesResponseCommandPredefinedPropertiesWithCluster>;
  readonly cluster: number;
}

export function createDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
  send,
  observer,
  cluster,
}: CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions): DiscoverZigbeeAttributesAdapter {
  return createDiscoverZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter({
    send: (
      command: ZigbeePredefinedCommand<ZigbeeDiscoverAttributesCommandPredefinedProperties>,
    ): Promise<void> => {
      return send({
        ...command,
        cluster,
      });
    },
    observer: observer.filter(
      (
        command: ZigbeePredefinedCommand<ZigbeeDiscoverAttributesResponseCommandPredefinedPropertiesWithCluster>,
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
