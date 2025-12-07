import { type ZigbeeCommand } from '../../zigbee-command.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from './zigbee-command-for-predefined-properties-constraint.js';

/**
 * Represents a partial ZigbeeCommand without some predefined properties.
 */
export type ZigbeeCommandForExcludedPredefinedProperties<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
> = Pick<ZigbeeCommand, Exclude<keyof ZigbeeCommand, keyof GPredefinedProperties>>;
