import { NONE, type None } from '@xstd/none';
import { type ObserveZigbeeCommandFlow } from '../../../../../../interfaces/flows/observe/observe-zigbee-command.flow.js';
import { type ZigbeeCommand } from '../../../../../../zigbee-command.js';
import { type ZigbeeCommandForExcludedPredefinedProperties } from '../../../../zigbee-command-for-excluded-predefined-properties.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../../zigbee-command-for-predefined-properties-constraint.js';
import { type ObserveZigbeeCommandForExcludedPredefinedPropertiesFlow } from '../observe-zigbee-command-for-excluded-predefined-properties.flow.js';

export function filterObserveZigbeeCommandFlow<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
>(
  observe: ObserveZigbeeCommandFlow,
  partialZigbeeCommand: GPredefinedProperties,
): ObserveZigbeeCommandForExcludedPredefinedPropertiesFlow<GPredefinedProperties> {
  const entries: readonly (readonly [key: string, value: unknown])[] =
    Object.entries(partialZigbeeCommand);

  return observe.mapFilter(
    (
      input: ZigbeeCommand,
    ): ZigbeeCommandForExcludedPredefinedProperties<GPredefinedProperties> | None => {
      const output: ZigbeeCommand = Object.assign({}, input);

      for (const [key, value] of entries) {
        if (value === Reflect.get(input, key)) {
          Reflect.deleteProperty(output, key);
        } else {
          return NONE;
        }
      }

      return output as ZigbeeCommandForExcludedPredefinedProperties<GPredefinedProperties>;
    },
  );
}
