import {
  createZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserver,
  type CreateZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserverOptionsForConsumer,
} from '../../../../../../../../../general/attributes/entities/events/attributes-observer/filtered-by-cluster/implementations/using-zigbee-predefined-command-observer/create-zigbee-attributes-observer-filtered-by-cluster-using-zigbee-predefined-command-observer.js';
import { ZIGBEE_CLUSTER_0x0000 } from '../../../../../../zigbee-cluster-0x0000.js';
import { type ZigbeeBasicAttributesObserver } from '../../zigbee-basic-attributes-observer.js';

export interface CreateZigbeeBasicAttributesObserverUsingZigbeePredefinedCommandObserverOptions
  extends CreateZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserverOptionsForConsumer {}

export function createZigbeeBasicAttributesObserverUsingZigbeePredefinedCommandObserver({
  observer,
}: CreateZigbeeBasicAttributesObserverUsingZigbeePredefinedCommandObserverOptions): ZigbeeBasicAttributesObserver {
  return createZigbeeAttributesObserverFilteredByClusterUsingZigbeePredefinedCommandObserver({
    observer,
    cluster: ZIGBEE_CLUSTER_0x0000,
  });
}
