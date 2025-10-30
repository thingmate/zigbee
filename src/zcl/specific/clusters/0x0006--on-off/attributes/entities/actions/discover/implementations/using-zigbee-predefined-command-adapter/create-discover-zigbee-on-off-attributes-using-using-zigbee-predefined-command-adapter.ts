import {
  createDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter,
  type CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer,
} from '../../../../../../../../../general/attributes/entities/actions/discover-attributes/implementations/using-discover-zigbee-attributes-adapter/adapter/filtered-by-cluster/implementations/using-zigbee-predefined-command-adapter/create-discover-zigbee-attributes-adapter-filtered-by-cluster-using-zigbee-predefined-command-adapter.js';
import { createDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapter } from '../../../../../../../../../general/attributes/entities/actions/discover-attributes/implementations/using-discover-zigbee-attributes-adapter/create-discover-zigbee-attributes-using-discover-zigbee-attributes-adapter.js';
import { ZIGBEE_CLUSTER_0x0006 } from '../../../../../../zigbee-cluster-0x0006.js';
import { type DiscoverZigbeeOnOffAttributes } from '../../discover-zigbee-on-off-attributes.js';

export interface CreateDiscoverZigbeeOnOffAttributesUsingZigbeePredefinedCommandAdapteOptions
  extends CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer {}

export function createDiscoverZigbeeOnOffAttributesUsingUsingZigbeePredefinedCommandAdapter({
  send,
  observer,
}: CreateDiscoverZigbeeOnOffAttributesUsingZigbeePredefinedCommandAdapteOptions): DiscoverZigbeeOnOffAttributes {
  return createDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapter(
    createDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
      send,
      observer,
      cluster: ZIGBEE_CLUSTER_0x0006,
    }),
  );
}
