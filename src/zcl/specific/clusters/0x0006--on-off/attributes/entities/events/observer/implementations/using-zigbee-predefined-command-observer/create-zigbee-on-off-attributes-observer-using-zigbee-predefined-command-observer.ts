import {
  createZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserver,
  type CreateZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserverOptionsForConsumer,
} from '../../../../../../../../../general/attributes/entities/events/attributes-observer/filtered-by-cluster/implementations/using-zigbee-predefined-command-observer/create-zigbee-attributes-observer-filtered-by-cluster-using-zigbee-predefined-command-observer.js';

import { ZIGBEE_CLUSTER_0x0006 } from '../../../../../../zigbee-cluster-0x0006.js';
import { type ZigbeeOnOffAttributesObserver } from '../../zigbee-on-off-attributes-observer.js';

export interface CreateZigbeeOnOffAttributesObserverUsingZigbeePredefinedCommandObserverOptions
  extends CreateZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserverOptionsForConsumer {}

export function createZigbeeOnOffAttributesObserverUsingZigbeePredefinedCommandObserver({
  observer,
}: CreateZigbeeOnOffAttributesObserverUsingZigbeePredefinedCommandObserverOptions): ZigbeeOnOffAttributesObserver {
  return createZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserver({
    observer,
    cluster: ZIGBEE_CLUSTER_0x0006,
  });
}
