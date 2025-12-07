import { type EncodeFunction, Encoder } from '@xstd/codec';
import { type SendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../for-predefined-properties/interfaces/actions/send/send-zigbee-command-for-predefined-properties.action.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../../../../../for-predefined-properties/zigbee-command-for-predefined-properties-constraint.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../../../../../for-predefined-properties/zigbee-command-for-predefined-properties.js';
import { type SendZigbeeDecodedPayloadAction } from '../../send-zigbee-decoded-payload.action.js';

export interface CreateSendZigbeeDecodedPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
  GPayload,
> {
  readonly send: SendZigbeeCommandForPredefinedPropertiesAction<GPredefinedProperties>;
  readonly commandPredefinedProperties: GPredefinedProperties;
  readonly encode: EncodeFunction<GPayload>;
}

export function createSendZigbeeDecodedPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
  GPayload,
>({
  send,
  commandPredefinedProperties,
  encode,
}: CreateSendZigbeeDecodedPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions<
  GPredefinedProperties,
  GPayload
>): SendZigbeeDecodedPayloadAction<GPayload> {
  return send.mapArguments(
    (payload: GPayload): [command: ZigbeeCommandForPredefinedProperties<GPredefinedProperties>] => {
      return [
        {
          ...commandPredefinedProperties,
          payload: Encoder.encode(payload, encode),
        },
      ];
    },
  );
}
