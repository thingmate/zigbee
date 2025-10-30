import { type Abortable, abortableContext } from '@xstd/abortable';
import { type ZigbeeDiscoverAttributesPayload } from '../../../../../../commands/0x0c--discover-attributes/types/zigbee-discover-attributes-payload/zigbee-discover-attributes-payload.js';
import { type ZigbeeDiscoverAttributesResponsePayload } from '../../../../../../commands/0x0d--discover-attributes-response/types/zigbee-discover-attributes-response-payload/zigbee-discover-attributes-response-payload.js';
import { type DiscoverZigbeeAttributes } from '../../discover-zigbee-attributes.js';
import { type DiscoverZigbeeAttributesAdapter } from './adapter/discover-zigbee-attributes-adapter.js';

export interface CreateDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapterOptions
  extends DiscoverZigbeeAttributesAdapter {}

export function createDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapter({
  send,
  observer,
}: CreateDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapterOptions): DiscoverZigbeeAttributes {
  return (
    payload: ZigbeeDiscoverAttributesPayload,
    options?: Abortable,
  ): Promise<ZigbeeDiscoverAttributesResponsePayload> => {
    return abortableContext(
      async (signal: AbortSignal): Promise<ZigbeeDiscoverAttributesResponsePayload> => {
        return (await Promise.all([observer.first(signal), send(payload, { signal })]))[0];
      },
      options,
    );
  };
}
