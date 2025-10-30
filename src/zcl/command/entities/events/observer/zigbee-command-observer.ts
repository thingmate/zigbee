import { type EntityEvent } from '@thingmate/entity';
import { type ZigbeeCommand } from '../../../zigbee-command.js';

export type ZigbeeCommandObserver = EntityEvent<ZigbeeCommand>;
