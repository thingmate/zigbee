import {
  createReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter,
  type CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer,
} from '../../../../../../../../../general/attributes/interfaces/actions/read-attributes/implementations/using-read-zigbee-attributes-adapter/adapter/filtered-by-cluster/implementations/using-zigbee-predefined-command-adapter/create-read-zigbee-attributes-adapter-filtered-by-cluster-using-zigbee-predefined-command-adapter.js';
import { createReadZigbeeAttributesUsingReadZigbeeAttributesAdapter } from '../../../../../../../../../general/attributes/interfaces/actions/read-attributes/implementations/using-read-zigbee-attributes-adapter/create-read-zigbee-attributes-using-read-zigbee-attributes-adapter.js';
import { ZIGBEE_CLUSTER_0x0000 } from '../../../../../../zigbee-cluster-0x0000.js';
import { type ReadZigbeeBasicAttributesAction } from '../../read-zigbee-basic-attributes.action.js';

export interface CreateReadZigbeeBasicAttributesActionUsingUsingZigbeePredefinedCommandAdapterOptions extends CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer {}

export function createReadZigbeeBasicAttributesActionUsingUsingZigbeePredefinedCommandAdapter({
  send,
  observe,
}: CreateReadZigbeeBasicAttributesActionUsingUsingZigbeePredefinedCommandAdapterOptions): ReadZigbeeBasicAttributesAction {
  return createReadZigbeeAttributesUsingReadZigbeeAttributesAdapter(
    createReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
      send,
      observe,
      cluster: ZIGBEE_CLUSTER_0x0000,
    }),
  );
}
