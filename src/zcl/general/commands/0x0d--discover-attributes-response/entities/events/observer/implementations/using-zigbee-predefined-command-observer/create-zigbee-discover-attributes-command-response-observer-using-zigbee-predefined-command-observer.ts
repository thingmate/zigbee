import { createZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserver } from '../../../../../../../../command/subsets/payload/decoded/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-decoded-payload-observer-using-zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import { decodeZigbeeDiscoverAttributesResponsePayload } from '../../../../../types/zigbee-discover-attributes-response-payload/codec/decode-zigbee-discover-attributes-response-payload.js';
import {
  ZIGBEE_DISCOVER_ATTRIBUTES_RESPONSE_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeDiscoverAttributesResponseCommandPredefinedProperties,
} from '../../../../../zigbee-discover-attributes-response-command.js';
import { type ZigbeeDiscoverAttributesResponseCommandObserver } from '../../zigbee-discover-attributes-response-command-observer.js';

export interface CreateZigbeeDiscoverAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserverOptions {
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeDiscoverAttributesResponseCommandPredefinedProperties>;
}

export function createZigbeeDiscoverAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserver({
  observer,
}: CreateZigbeeDiscoverAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserverOptions): ZigbeeDiscoverAttributesResponseCommandObserver {
  return createZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserver({
    observer,
    commandPredefinedProperties: ZIGBEE_DISCOVER_ATTRIBUTES_RESPONSE_COMMAND_PREDEFINED_PROPERTIES,
    decode: decodeZigbeeDiscoverAttributesResponsePayload,
  });
}
