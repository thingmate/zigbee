import { type SendZigbeeCommandAction } from '../interfaces/actions/send/send-zigbee-command.action.js';
import { type ObserveZigbeeCommandFlow } from '../interfaces/flows/observe/observe-zigbee-command.flow.js';

export interface ZigbeeCommandAdapter {
  readonly send: SendZigbeeCommandAction;
  readonly observe: ObserveZigbeeCommandFlow;
}
