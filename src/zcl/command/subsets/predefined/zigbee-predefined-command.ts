import { type ZigbeeCommand } from '../../zigbee-command.js';

export type ZigbeePredefinedCommandPredefinedPropertiesConstraint = Partial<
  Omit<ZigbeeCommand, 'payload'>
>;

/**
 * Represents a ZigbeeCommand with predefined properties.
 */
export type ZigbeePredefinedCommand<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
> = Pick<ZigbeeCommand, Extract<keyof GPredefinedProperties, keyof ZigbeeCommand> | 'payload'>;
