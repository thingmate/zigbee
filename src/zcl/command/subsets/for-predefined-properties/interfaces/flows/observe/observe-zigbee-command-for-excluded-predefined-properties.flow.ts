import { type Flow, type PushToPullOptions } from '@xstd/flow';
import { type ZigbeeCommandForExcludedPredefinedProperties } from '../../../zigbee-command-for-excluded-predefined-properties.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../zigbee-command-for-predefined-properties-constraint.js';

/**
 * Represents a ObserveZigbeeCommandFlow emitting a partial ZigbeeCommand without some predefined properties.
 */
export type ObserveZigbeeCommandForExcludedPredefinedPropertiesFlow<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
> = Flow<
  ZigbeeCommandForExcludedPredefinedProperties<GPredefinedProperties>,
  [options?: PushToPullOptions]
>;
