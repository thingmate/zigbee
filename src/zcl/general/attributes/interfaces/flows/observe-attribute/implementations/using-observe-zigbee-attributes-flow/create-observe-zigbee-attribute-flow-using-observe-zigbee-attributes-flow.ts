import { NONE, type None } from '@xstd/none';
import { type ZigbeeReportAttributesPayload } from '../../../../../../commands/0x0a--report-attributes/members/zigbee-report-attributes-payload/zigbee-report-attributes-payload.js';
import { type ObserveZigbeeAttributesFlow } from '../../../observe-attributes/observe-zigbee-attributes.flow.js';
import { type ObserveZigbeeAttributeFlow } from '../../observe-zigbee-attribute.flow.js';

export interface CreateObserveZigbeeAttributeFlowUsingObserveZigbeeAttributesFlowOptions {
  readonly observe: ObserveZigbeeAttributesFlow;
  readonly attributeId: number /* u16 */;
}

export function createObserveZigbeeAttributeFlowUsingObserveZigbeeAttributesFlow<GValue>({
  observe,
  attributeId,
}: CreateObserveZigbeeAttributeFlowUsingObserveZigbeeAttributesFlowOptions): ObserveZigbeeAttributeFlow<GValue> {
  return observe.mapFilter((payload: ZigbeeReportAttributesPayload): GValue | None => {
    for (const record of payload) {
      if (record.id === attributeId) {
        return record.value as GValue;
      }
    }
    return NONE;
  });
}
