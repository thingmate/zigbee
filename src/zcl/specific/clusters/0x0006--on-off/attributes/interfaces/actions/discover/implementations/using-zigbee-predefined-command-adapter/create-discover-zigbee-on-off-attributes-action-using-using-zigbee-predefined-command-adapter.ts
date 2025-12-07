import {
  createDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter,
  type CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer,
} from '../../../../../../../../../general/attributes/interfaces/actions/discover-attributes/implementations/using-discover-zigbee-attributes-adapter/adapter/filtered-by-cluster/implementations/using-zigbee-predefined-command-adapter/create-discover-zigbee-attributes-adapter-filtered-by-cluster-using-zigbee-predefined-command-adapter.js';
import { createDiscoverZigbeeAttributesActionUsingDiscoverZigbeeAttributesAdapter } from '../../../../../../../../../general/attributes/interfaces/actions/discover-attributes/implementations/using-discover-zigbee-attributes-adapter/create-discover-zigbee-attributes-action-using-discover-zigbee-attributes-adapter.js';
import { ZIGBEE_CLUSTER_0x0006 } from '../../../../../../zigbee-cluster-0x0006.js';
import { type DiscoverZigbeeOnOffAttributesAction } from '../../discover-zigbee-on-off-attributes.action.js';

export interface CreateDiscoverZigbeeOnOffAttributesActionUsingZigbeePredefinedCommandAdapteOptions extends CreateDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer {}

export function createDiscoverZigbeeOnOffAttributesActionUsingUsingZigbeePredefinedCommandAdapter({
  send,
  observe,
}: CreateDiscoverZigbeeOnOffAttributesActionUsingZigbeePredefinedCommandAdapteOptions): DiscoverZigbeeOnOffAttributesAction {
  return createDiscoverZigbeeAttributesActionUsingDiscoverZigbeeAttributesAdapter(
    createDiscoverZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
      send,
      observe,
      cluster: ZIGBEE_CLUSTER_0x0006,
    }),
  );
}
