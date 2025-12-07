import { Action } from '@xstd/action';
import { type ZigbeeDiscoverAttributesPayload } from '../../../../../../commands/0x0c--discover-attributes/members/zigbee-discover-attributes-payload/zigbee-discover-attributes-payload.js';
import { type ZigbeeDiscoverAttributesResponsePayload } from '../../../../../../commands/0x0d--discover-attributes-response/members/zigbee-discover-attributes-response-payload/zigbee-discover-attributes-response-payload.js';
import { type DiscoverZigbeeAttributesAction } from '../../discover-zigbee-attributes.action.js';
import { type DiscoverZigbeeAttributesAdapter } from './adapter/discover-zigbee-attributes-adapter.js';

export interface CreateDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapterOptions extends DiscoverZigbeeAttributesAdapter {}

export function createDiscoverZigbeeAttributesActionUsingDiscoverZigbeeAttributesAdapter({
  send,
  observe,
}: CreateDiscoverZigbeeAttributesUsingDiscoverZigbeeAttributesAdapterOptions): DiscoverZigbeeAttributesAction {
  return Action.fromSendAndObserve<
    [payload: ZigbeeDiscoverAttributesPayload],
    ZigbeeDiscoverAttributesResponsePayload
  >({
    send,
    observe: new Action<
      [payload: ZigbeeDiscoverAttributesPayload],
      ZigbeeDiscoverAttributesResponsePayload
    >((signal: AbortSignal): Promise<ZigbeeDiscoverAttributesResponsePayload> => {
      return observe.first(signal);
    }),
  });
}
