import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommand } from '../../../../../../../../command/subsets/predefined/zigbee-predefined-command.js';
import { createZigbeeAttributesObserverUsingZigbeePredefinedCommandObserver } from '../../../implementations/using-zigbee-predefined-command-observer/create-zigbee-attributes-observer-using-zigbee-predefined-command-observer.js';
import { type ZigbeeAttributesObserver } from '../../../zigbee-attributes-observer.js';
import { type ZigbeeReportAttributesCommandPredefinedPropertiesWithCluster } from '../../zigbee-report-attributes-command-predefined-properties-with-cluster.js';

export interface CreateZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserverOptions {
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeReportAttributesCommandPredefinedPropertiesWithCluster>;
  readonly cluster: number;
}

export function createZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserver({
  observer,
  cluster,
}: CreateZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserverOptions): ZigbeeAttributesObserver {
  return createZigbeeAttributesObserverUsingZigbeePredefinedCommandObserver({
    observer: observer.filter(
      (
        command: ZigbeePredefinedCommand<ZigbeeReportAttributesCommandPredefinedPropertiesWithCluster>,
      ): boolean => {
        return command.cluster === cluster;
      },
    ),
  });
}

/*---*/

export type CreateZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserverOptionsForConsumer =
  Omit<
    CreateZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserverOptions,
    'cluster'
  >;
