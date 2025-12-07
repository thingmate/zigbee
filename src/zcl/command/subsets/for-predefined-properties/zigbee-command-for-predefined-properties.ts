import { type ZigbeeCommand } from '../../zigbee-command.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from './zigbee-command-for-predefined-properties-constraint.js';

/**
 * Represents the minimal partial ZigbeeCommand to match some predefined properties.
 */
export type ZigbeeCommandForPredefinedProperties<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
> = Pick<ZigbeeCommand, Extract<keyof GPredefinedProperties, keyof ZigbeeCommand> | 'payload'>;
