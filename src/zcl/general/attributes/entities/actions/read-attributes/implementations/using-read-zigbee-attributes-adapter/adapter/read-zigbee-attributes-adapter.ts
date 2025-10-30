import { type SendZigbeeReadAttributesCommand } from '../../../../../../../commands/0x00--read-attributes/entities/actions/send/send-zigbee-read-attributes-command.js';
import { type ZigbeeReadAttributesResponseCommandObserver } from '../../../../../../../commands/0x01--read-attributes-response/entities/events/observer/zigbee-read-attributes-response-command-observer.js';

export interface ReadZigbeeAttributesAdapter {
  readonly send: SendZigbeeReadAttributesCommand;
  readonly observer: ZigbeeReadAttributesResponseCommandObserver;
}
