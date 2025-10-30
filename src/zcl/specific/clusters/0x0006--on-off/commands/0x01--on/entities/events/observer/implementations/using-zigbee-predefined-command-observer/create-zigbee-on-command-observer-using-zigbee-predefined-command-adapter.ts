import { createZigbeeEmptyPayloadObserverUsingZigbeePredefinedCommandObserver } from '../../../../../../../../../../command/subsets/payload/empty/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-empty-payload-observer-using-zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import {
  ZIGBEE_CLUSTER_0x0006_COMMAND_0x01_PREDEFINED_PROPERTIES,
  type ZigbeeCluster0x0006Command0x01PredefinedProperties,
} from '../../../../../zigbee-cluster-0x0006-command-0x01.js';

import { type ZigbeeOnCommandObserver } from '../../zigbee-on-command-observer.js';

export interface CreateZigbeeOnCommandObserverUsingZigbeePredefinedCommandAdapterOptions {
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeCluster0x0006Command0x01PredefinedProperties>;
}

export function createZigbeeOnCommandObserverUsingZigbeePredefinedCommandAdapter({
  observer,
}: CreateZigbeeOnCommandObserverUsingZigbeePredefinedCommandAdapterOptions): ZigbeeOnCommandObserver {
  return createZigbeeEmptyPayloadObserverUsingZigbeePredefinedCommandObserver({
    observer,
    commandPredefinedProperties: ZIGBEE_CLUSTER_0x0006_COMMAND_0x01_PREDEFINED_PROPERTIES,
  });
}
