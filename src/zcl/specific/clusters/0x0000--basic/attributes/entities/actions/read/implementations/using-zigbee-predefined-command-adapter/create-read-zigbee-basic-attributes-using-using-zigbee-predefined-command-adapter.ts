import {
  createReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter,
  type CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer,
} from '../../../../../../../../../general/attributes/entities/actions/read-attributes/implementations/using-read-zigbee-attributes-adapter/adapter/filtered-by-cluster/implementations/using-zigbee-predefined-command-adapter/create-read-zigbee-attributes-adapter-filtered-by-cluster-using-zigbee-predefined-command-adapter.js';
import { createReadZigbeeAttributesUsingReadZigbeeAttributesAdapter } from '../../../../../../../../../general/attributes/entities/actions/read-attributes/implementations/using-read-zigbee-attributes-adapter/create-read-zigbee-attributes-using-read-zigbee-attributes-adapter.js';
import { ZIGBEE_CLUSTER_0x0000 } from '../../../../../../zigbee-cluster-0x0000.js';
import { type ReadZigbeeBasicAttributes } from '../../read-zigbee-basic-attributes.js';

export interface CreateReadZigbeeBasicAttributesUsingZigbeePredefinedCommandAdapteOptions
  extends CreateReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapterOptionsForConsumer {}

export function createReadZigbeeBasicAttributesUsingUsingZigbeePredefinedCommandAdapter({
  send,
  observer,
}: CreateReadZigbeeBasicAttributesUsingZigbeePredefinedCommandAdapteOptions): ReadZigbeeBasicAttributes {
  return createReadZigbeeAttributesUsingReadZigbeeAttributesAdapter(
    createReadZigbeeAttributesAdapterFilteredByClusterUsingZigbeePredefinedCommandAdapter({
      send,
      observer,
      cluster: ZIGBEE_CLUSTER_0x0000,
    }),
  );
}
