import { type ZigbeeCommand } from '../../zigbee-command.js';

export type ZigbeeCommandForPredefinedPropertiesConstraint = Partial<
  Omit<ZigbeeCommand, 'payload'>
> & {
  payload?: never;
};
