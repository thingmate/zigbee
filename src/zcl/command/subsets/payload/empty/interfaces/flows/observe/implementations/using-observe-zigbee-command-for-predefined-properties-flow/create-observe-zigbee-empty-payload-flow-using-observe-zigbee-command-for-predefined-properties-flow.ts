import { NONE, type None } from '@xstd/none';
import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../../../../../for-predefined-properties/zigbee-command-for-predefined-properties-constraint.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../../../../../for-predefined-properties/zigbee-command-for-predefined-properties.js';
import { type ObserveZigbeeEmptyPayloadFlow } from '../../observe-zigbee-empty-payload.flow.js';

export interface CreateObserveZigbeeEmptyPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
> {
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<GPredefinedProperties>;
  readonly commandPredefinedProperties: GPredefinedProperties;
}

export function createObserveZigbeeEmptyPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
>({
  observe,
  commandPredefinedProperties,
}: CreateObserveZigbeeEmptyPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions<GPredefinedProperties>): ObserveZigbeeEmptyPayloadFlow {
  const entries: readonly (readonly [key: string, value: unknown])[] = Object.entries(
    commandPredefinedProperties,
  );

  return observe.mapFilter(
    (command: ZigbeeCommandForPredefinedProperties<GPredefinedProperties>): void | None => {
      return entries.every(([key, value]: readonly [string, unknown]): boolean => {
        return value === Reflect.get(command, key);
      })
        ? undefined
        : NONE;
    },
  );
}
