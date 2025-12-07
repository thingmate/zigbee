import { type Action } from '@xstd/action';
import { type ZigbeeCommandForExcludedPredefinedProperties } from '../../../zigbee-command-for-excluded-predefined-properties.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../zigbee-command-for-predefined-properties-constraint.js';

/**
 * Represents a SendZigbeeCommandAction function sending a partial ZigbeeCommand without some predefined properties.
 */
export type SendZigbeeCommandForExcludedPredefinedPropertiesAction<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
> = Action<[command: ZigbeeCommandForExcludedPredefinedProperties<GPredefinedProperties>], void>;
