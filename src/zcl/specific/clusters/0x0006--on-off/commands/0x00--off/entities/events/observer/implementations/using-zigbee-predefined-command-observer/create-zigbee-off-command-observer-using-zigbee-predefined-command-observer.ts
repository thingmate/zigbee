import { createZigbeeEmptyPayloadObserverUsingZigbeePredefinedCommandObserver } from '../../../../../../../../../../command/subsets/payload/empty/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-empty-payload-observer-using-zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import {
  ZIGBEE_CLUSTER_0x0006_COMMAND_0x00_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0006Command0x00PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0006-command-0x00.js';

import { type ZigbeeOffCommandObserver } from '../../zigbee-off-command-observer.js';

export interface CreateZigbeeOffCommandObserverUsingZigbeePredefinedCommandObserverOptions {
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeCluster0x0006Command0x00PredefinedProperties>;
}

export function createZigbeeOffCommandObserverUsingZigbeePredefinedCommandObserver({
  observer,
}: CreateZigbeeOffCommandObserverUsingZigbeePredefinedCommandObserverOptions): ZigbeeOffCommandObserver {
  return createZigbeeEmptyPayloadObserverUsingZigbeePredefinedCommandObserver({
    observer,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0006_COMMAND_0x00_PREDEFINED_PROPERTIES,
  });
}
