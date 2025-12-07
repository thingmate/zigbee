import { type Action } from '@xstd/action';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../zigbee-command-for-predefined-properties-constraint.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../zigbee-command-for-predefined-properties.js';

/**
 * Represents a SendZigbeeCommandAction function sending some predefined properties.
 */
export type SendZigbeeCommandForPredefinedPropertiesAction<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
> = Action<[command: ZigbeeCommandForPredefinedProperties<GPredefinedProperties>], void>;
