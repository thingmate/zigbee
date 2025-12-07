import {
  createReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter,
  type CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer,
} from '../../../../../../../../../general/attributes/interfaces/actions/read-attributes/implementations/using-read-zigbee-attributes-adapter/adapter/filtered-by-cluster/implementations/using-zigbee-predefined-command-adapter/create-read-zigbee-attributes-adapter-filtered-by-cluster-using-zigbee-predefined-command-adapter.js';
import { createReadZigbeeAttributesUsingReadZigbeeAttributesAdapter } from '../../../../../../../../../general/attributes/interfaces/actions/read-attributes/implementations/using-read-zigbee-attributes-adapter/create-read-zigbee-attributes-using-read-zigbee-attributes-adapter.js';
import { ZIGBEE_CLUSTER_0x0006 } from '../../../../../../zigbee-cluster-0x0006.js';
import { type ReadZigbeeOnOffAttributesAction } from '../../read-zigbee-on-off-attributes.action.js';

export interface CreateReadZigbeeOnOffAttributesActionUsingZigbeePredefinedCommandAdapteOptions extends CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer {}

export function createReadZigbeeOnOffAttributesActionUsingUsingZigbeePredefinedCommandAdapter({
  send,
  observe,
}: CreateReadZigbeeOnOffAttributesActionUsingZigbeePredefinedCommandAdapteOptions): ReadZigbeeOnOffAttributesAction {
  return createReadZigbeeAttributesUsingReadZigbeeAttributesAdapter(
    createReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
      send,
      observe,
      cluster: ZIGBEE_CLUSTER_0x0006,
    }),
  );
}
