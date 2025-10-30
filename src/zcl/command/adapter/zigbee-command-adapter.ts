import { type SendZigbeeCommand } from '../entities/actions/send/send-zigbee-command.js';
import { type ZigbeeCommandObserver } from '../entities/events/observer/zigbee-command-observer.js';

export interface ZigbeeCommandAdapter {
  readonly send: SendZigbeeCommand;
  readonly observer: ZigbeeCommandObserver;
}
