import { type Action } from '@xstd/action';
import { type ZigbeeCommand } from '../../../zigbee-command.js';

export type SendZigbeeCommandAction = Action<[command: ZigbeeCommand], void>;
