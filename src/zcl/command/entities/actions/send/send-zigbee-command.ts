import { type EntityAction } from '@thingmate/entity';
import { type ZigbeeCommand } from '../../../zigbee-command.js';

export type SendZigbeeCommand = EntityAction<[command: ZigbeeCommand], void>;
