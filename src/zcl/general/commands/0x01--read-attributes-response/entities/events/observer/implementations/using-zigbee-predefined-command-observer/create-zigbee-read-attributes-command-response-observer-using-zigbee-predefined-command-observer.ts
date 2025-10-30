import { createZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserver } from '../../../../../../../../command/subsets/payload/decoded/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-decoded-payload-observer-using-zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import { decodeZigbeeReadAttributesResponsePayload } from '../../../../../types/zigbee-read-attributes-response-payload/codec/decode-zigbee-read-attributes-response-payload.js';
import {
  ZIGBEE_READ_ATTRIBUTES_RESPONSE_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeReadAttributesResponseCommandPredefinedProperties,
} from '../../../../../zigbee-read-attributes-response-command.js';
import { type ZigbeeReadAttributesResponseCommandObserver } from '../../zigbee-read-attributes-response-command-observer.js';

export interface CreateZigbeeReadAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserverOptions {
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeReadAttributesResponseCommandPredefinedProperties>;
}

export function createZigbeeReadAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserver({
  observer,
}: CreateZigbeeReadAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserverOptions): ZigbeeReadAttributesResponseCommandObserver {
  return createZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserver({
    observer,
    commandPredefinedProperties: ZIGBEE_READ_ATTRIBUTES_RESPONSE_COMMAND_PREDEFINED_PROPERTIES,
    decode: decodeZigbeeReadAttributesResponsePayload,
  });
}
