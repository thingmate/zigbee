import {
  createDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter,
  type CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer,
} from '../../../../../../../../../general/attributes/entities/actions/discover-attributes/implementations/using-discover-zigbee-attributes-adapter/adapter/filtered-by-cluster/implementations/using-zigbee-predefined-command-adapter/create-discover-zigbee-attributes-adapter-filtered-by-cluster-using-zigbee-predefined-command-adapter.js';
import { createDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapter } from '../../../../../../../../../general/attributes/entities/actions/discover-attributes/implementations/using-discover-zigbee-attributes-adapter/create-discover-zigbee-attributes-using-discover-zigbee-attributes-adapter.js';
import { ZIGBEE_CLUSTER_0x0000 } from '../../../../../../zigbee-cluster-0x0000.js';
import { type DiscoverZigbeeBasicAttributes } from '../../discover-zigbee-basic-attributes.js';

export interface CreateDiscoverZigbeeBasicAttributesUsingZigbeePredefinedCommandAdapteOptions
  extends CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer {}

export function createDiscoverZigbeeBasicAttributesUsingUsingZigbeePredefinedCommandAdapter({
  send,
  observer,
}: CreateDiscoverZigbeeBasicAttributesUsingZigbeePredefinedCommandAdapteOptions): DiscoverZigbeeBasicAttributes {
  return createDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapter(
    createDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
      send,
      observer,
      cluster: ZIGBEE_CLUSTER_0x0000,
    }),
  );
}
