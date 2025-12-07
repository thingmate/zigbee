import { type Flow, type PushToPullOptions } from '@xstd/flow';
import { type ZigbeeCommand } from '../../../zigbee-command.js';

export type ObserveZigbeeCommandFlow = Flow<ZigbeeCommand, [options?: PushToPullOptions]>;
