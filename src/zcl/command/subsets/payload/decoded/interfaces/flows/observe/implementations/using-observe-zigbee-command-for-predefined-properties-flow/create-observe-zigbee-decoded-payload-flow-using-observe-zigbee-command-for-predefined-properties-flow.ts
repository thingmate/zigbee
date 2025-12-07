import { type DecodeFunction, Decoder } from '@xstd/codec';
import { type None, NONE } from '@xstd/none';
import { type ObserveZigbeeCommandForPredefinedPropertiesFlow } from '../../../../../../../for-predefined-properties/interfaces/flows/observe/observe-zigbee-command-for-predefined-properties.flow.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../../../../../for-predefined-properties/zigbee-command-for-predefined-properties-constraint.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../../../../../for-predefined-properties/zigbee-command-for-predefined-properties.js';
import { type ObserveZigbeeDecodedPayloadFlow } from '../../observe-zigbee-decoded-payload.flow.js';

export interface CreateObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
  GPayload,
> {
  readonly observe: ObserveZigbeeCommandForPredefinedPropertiesFlow<GPredefinedProperties>;
  readonly commandPredefinedProperties: GPredefinedProperties;
  readonly decode: DecodeFunction<GPayload>;
}

export function createObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlow<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
  GPayload,
>({
  observe,
  commandPredefinedProperties,
  decode,
}: CreateObserveZigbeeDecodedPayloadFlowUsingObserveZigbeeCommandForPredefinedPropertiesFlowOptions<
  GPredefinedProperties,
  GPayload
>): ObserveZigbeeDecodedPayloadFlow<GPayload> {
  const entries: readonly (readonly [key: string, value: unknown])[] = Object.entries(
    commandPredefinedProperties,
  );

  return observe.mapFilter(
    (command: ZigbeeCommandForPredefinedProperties<GPredefinedProperties>): GPayload | None => {
      return entries.every(([key, value]: readonly [string, unknown]): boolean => {
        return value === Reflect.get(command, key);
      })
        ? Decoder.decode(command.payload, decode)
        : NONE;
    },
  );
}
