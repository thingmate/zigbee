import { type ZigbeeDecodedPayloadObserver } from '../../../../../../command/subsets/payload/decoded/entities/events/observer/zigbee-decoded-payload-observer.js';
import { type ZigbeeReportAttributesPayload } from '../../../types/zigbee-report-attributes-payload/zigbee-report-attributes-payload.js';

export type ZigbeeReportAttributesCommandObserver =
  ZigbeeDecodedPayloadObserver<ZigbeeReportAttributesPayload>;
