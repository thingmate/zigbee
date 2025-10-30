import { createZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserver } from '../../../../../../../../command/subsets/payload/decoded/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-decoded-payload-observer-using-zigbee-predefined-command-observer.js';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../../command/subsets/predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import { decodeZigbeeReportAttributesPayload } from '../../../../../types/zigbee-report-attributes-payload/codec/decode-zigbee-report-attributes-payload.js';
import {
  ZIGBEE_REPORT_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
  type ZigbeeReportAttributesCommandPredefinedProperties,
} from '../../../../../zigbee-report-attributes-command.js';
import { type ZigbeeReportAttributesCommandObserver } from '../../zigbee-report-attributes-command-observer.js';

export interface CreateZigbeeReportAttributesCommandObserverUsingZigbeePredefinedCommandObserverOptions {
  readonly observer: ZigbeePredefinedCommandObserver<ZigbeeReportAttributesCommandPredefinedProperties>;
}

export function createZigbeeReportAttributesCommandObserverUsingZigbeePredefinedCommandObserver({
  observer,
}: CreateZigbeeReportAttributesCommandObserverUsingZigbeePredefinedCommandObserverOptions): ZigbeeReportAttributesCommandObserver {
  return createZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserver({
    observer,
    commandPredefinedProperties: ZIGBEE_REPORT_ATTRIBUTES_COMMAND_PREDEFINED_PROPERTIES,
    decode: decodeZigbeeReportAttributesPayload,
  });
}
