import { type Flow, type PushToPullOptions } from '@xstd/flow';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../zigbee-command-for-predefined-properties-constraint.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../zigbee-command-for-predefined-properties.js';

/**
 * Represents an ObserveZigbeeCommandFlow emitting the minimal partial ZigbeeCommand to match some predefined properties.
 */
export type ObserveZigbeeCommandForPredefinedPropertiesFlow<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
> = Flow<
  ZigbeeCommandForPredefinedProperties<GPredefinedProperties>,
  [options?: PushToPullOptions]
>;
