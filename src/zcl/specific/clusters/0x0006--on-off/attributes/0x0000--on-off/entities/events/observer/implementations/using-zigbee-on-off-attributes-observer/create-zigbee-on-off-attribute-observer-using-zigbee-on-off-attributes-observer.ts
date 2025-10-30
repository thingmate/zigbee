import { createZigbeeAttributeObserverUsingZigbeeAttributesObserver } from '../../../../../../../../../../general/attributes/entities/events/attribute-observer/implementations/using-zigbee-attributes-observer/create-zigbee-attribute-observer-using-zigbee-attributes-observer.js';
import { type ZigbeeOnOffAttributesObserver } from '../../../../../../entities/events/observer/zigbee-on-off-attributes-observer.js';
import { ZIGBEE_CLUSTER_0x0006_ATTRIBUTE_0x0000 } from '../../../../../zigbee-cluster-0x0006-attribute-0x0000.js';

import { type ZigbeeOnOffAttributeObserver } from '../../zigbee-on-off-attribute-observer.js';

export interface CreateZigbeeOnOffAttributeObserverUsingZigbeeOnOffAttributesObserverOptions {
  readonly observer: ZigbeeOnOffAttributesObserver;
}

export function createZigbeeOnOffAttributeObserverUsingZigbeeOnOffAttributesObserver({
  observer,
}: CreateZigbeeOnOffAttributeObserverUsingZigbeeOnOffAttributesObserverOptions): ZigbeeOnOffAttributeObserver {
  return createZigbeeAttributeObserverUsingZigbeeAttributesObserver({
    observer,
    attributeId: ZIGBEE_CLUSTER_0x0006_ATTRIBUTE_0x0000,
  });
}
