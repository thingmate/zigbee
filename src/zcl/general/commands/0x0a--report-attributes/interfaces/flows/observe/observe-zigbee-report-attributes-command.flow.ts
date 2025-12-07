import { type ObserveZigbeeDecodedPayloadFlow } from '../../../../../../command/subsets/payload/decoded/interfaces/flows/observe/observe-zigbee-decoded-payload.flow.js';
import { type ZigbeeReportAttributesPayload } from '../../../members/zigbee-report-attributes-payload/zigbee-report-attributes-payload.js';

export type ObserveZigbeeReportAttributesCommandFlow =
  ObserveZigbeeDecodedPayloadFlow<ZigbeeReportAttributesPayload>;
