import { createZigbeeEmptyPayloadObserverUsingZigbeePredefinedCommandObserver } from '../../../../../../../../../../command/subsets/payload/empty/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-empty-payload-observer-using-zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import {
  ZIGBEE_CLUSTER_0x0000_COMMAND_0x00_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0000Command0x00PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0000-command-0x00.js';

import { type ZigbeeResetToFactoryDefaultsCommandObserver } from '../../zigbee-reset-to-factory-defaults-command-observer.js';

export interface CreateZigbeeResetToFactoryDefaultsCommandObserverUsingZigbeePredefinedCommandObserverOptions {
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeCluster0x0000Command0x00PredefinedProperties>;
}

export function createZigbeeResetToFactoryDefaultsCommandObserverUsingZigbeePredefinedCommandObserver({
  observer,
}: CreateZigbeeResetToFactoryDefaultsCommandObserverUsingZigbeePredefinedCommandObserverOptions): ZigbeeResetToFactoryDefaultsCommandObserver {
  return createZigbeeEmptyPayloadObserverUsingZigbeePredefinedCommandObserver({
    observer,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0000_COMMAND_0x00_PREDEFINED_PROPERTIES,
  });
}
