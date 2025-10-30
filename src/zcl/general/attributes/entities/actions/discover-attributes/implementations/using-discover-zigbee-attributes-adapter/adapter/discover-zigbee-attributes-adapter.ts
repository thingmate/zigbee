import { type SendZigbeeDiscoverAttributesCommand } from '../../../../../../../commands/0x0c--discover-attributes/entities/actions/send/send-zigbee-discover-attributes-command.js';
import { type ZigbeeDiscoverAttributesResponseCommandObserver } from '../../../../../../../commands/0x0d--discover-attributes-response/entities/events/observer/zigbee-discover-attributes-response-command-observer.js';

export interface DiscoverZigbeeAttributesAdapter {
  readonly send: SendZigbeeDiscoverAttributesCommand;
  readonly observer: ZigbeeDiscoverAttributesResponseCommandObserver;
}
