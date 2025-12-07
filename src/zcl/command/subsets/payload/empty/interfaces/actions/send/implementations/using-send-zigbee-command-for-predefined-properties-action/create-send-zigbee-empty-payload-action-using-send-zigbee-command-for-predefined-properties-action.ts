import { type SendZigbeeCommandForPredefinedPropertiesAction } from '../../../../../../../for-predefined-properties/interfaces/actions/send/send-zigbee-command-for-predefined-properties.action.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../../../../../for-predefined-properties/zigbee-command-for-predefined-properties-constraint.js';
import { type ZigbeeCommandForPredefinedProperties } from '../../../../../../../for-predefined-properties/zigbee-command-for-predefined-properties.js';
import { type SendZigbeeEmptyPayloadAction } from '../../send-zigbee-empty-payload.action.js';

export interface CreateSendZigbeeEmptyPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
> {
  readonly send: SendZigbeeCommandForPredefinedPropertiesAction<GPredefinedProperties>;
  readonly commandPredefinedProperties: GPredefinedProperties;
}

export function createSendZigbeeEmptyPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesAction<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
>({
  send,
  commandPredefinedProperties,
}: CreateSendZigbeeEmptyPayloadActionUsingSendZigbeeCommandForPredefinedPropertiesActionOptions<GPredefinedProperties>): SendZigbeeEmptyPayloadAction {
  return send.mapArguments(
    (): [command: ZigbeeCommandForPredefinedProperties<GPredefinedProperties>] => {
      return [
        {
          ...commandPredefinedProperties,
          payload: EMPTY_PAYLOAD,
        },
      ];
    },
  );
}

const EMPTY_PAYLOAD: Uint8Array = new Uint8Array(0);
