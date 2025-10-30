import { type SendZigbeePredefinedCommand } from '../../../../../../../../../../../command/subsets/predefined/entities/actions/send/send-zigbee-predefined-command.js';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommand } from '../../../../../../../../../../../command/subsets/predefined/zigbee-predefined-command.js';
import { type ZigbeeReadAttributesCommandPredefinedProperties } from '../../../../../../../../../../commands/0x00--read-attributes/zigbee-read-attributes-command.js';
import { createReadZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter } from '../../../implementations/using-zigbee-predefined-command-adapter/create-read-zigbee-attributes-adapter-using-zigbee-predefined-command-adapter.js';
import { type ReadZigbeeAttributesAdapter } from '../../../read-zigbee-attributes-adapter.js';
import { type ZigbeeReadAttributesCommandPredefinedPropertiesWithCluster } from '../../zigbee-read-attributes-command-predefined-properties-with-cluster.js';
import { type ZigbeeReadAttributesResponseCommandPredefinedPropertiesWithCluster } from '../../zigbee-read-attributes-response-command-predefined-properties-with-cluster.js';

export interface CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions {
  readonly send: SendZigbeePredefinedCommand<ZigbeeReadAttributesCommandPredefinedPropertiesWithCluster>;
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeReadAttributesResponseCommandPredefinedPropertiesWithCluster>;
  readonly cluster: number;
}

export function createReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
  send,
  observer,
  cluster,
}: CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptions): ReadZigbeeAttributesAdapter {
  return createReadZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter({
    send: (
      command: ZigbeePredefinedCommand<ZigbeeReadAttributesCommandPredefinedProperties>,
    ): Promise<void> => {
      return send({
        ...command,
        cluster,
      });
    },
    observer: observer.filter(
      (
        command: ZigbeePredefinedCommand<ZigbeeReadAttributesResponseCommandPredefinedPropertiesWithCluster>,
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
