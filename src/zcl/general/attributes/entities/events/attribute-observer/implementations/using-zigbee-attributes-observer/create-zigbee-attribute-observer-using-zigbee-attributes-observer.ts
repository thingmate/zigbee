import { NONE, type None } from '@xstd/none';
import { type ZigbeeReportAttributesPayload } from '../../../../../../commands/0x0a--report-attributes/types/zigbee-report-attributes-payload/zigbee-report-attributes-payload.js';
import { type ZigbeeAttributesObserver } from '../../../attributes-observer/zigbee-attributes-observer.js';
import { type ZigbeeAttributeObserver } from '../../zigbee-attribute-observer.js';

export interface CreateZigbeeAttributeObserverUsingZigbeeAttributesObserverOptions {
  readonly observer: ZigbeeAttributesObserver;
  readonly attributeId: number /* u16 */;
}

export function createZigbeeAttributeObserverUsingZigbeeAttributesObserver<GValue>({
  observer,
  attributeId,
}: CreateZigbeeAttributeObserverUsingZigbeeAttributesObserverOptions): ZigbeeAttributeObserver<GValue> {
  return observer.mapFilter((payload: ZigbeeReportAttributesPayload): GValue | None => {
    for (const record of payload) {
      if (record.id === attributeId) {
        return record.value as GValue;
      }
    }
    return NONE;
  });
}
