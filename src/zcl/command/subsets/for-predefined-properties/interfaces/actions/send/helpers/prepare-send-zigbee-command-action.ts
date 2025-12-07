import { type SendZigbeeCommandAction } from '../../../../../../interfaces/actions/send/send-zigbee-command.action.js';
import { type ZigbeeCommand } from '../../../../../../zigbee-command.js';
import { type ZigbeeCommandForExcludedPredefinedProperties } from '../../../../zigbee-command-for-excluded-predefined-properties.js';
import { type ZigbeeCommandForPredefinedPropertiesConstraint } from '../../../../zigbee-command-for-predefined-properties-constraint.js';
import { type SendZigbeeCommandForExcludedPredefinedPropertiesAction } from '../send-zigbee-command-for-excluded-predefined-properties.action.js';

export function prepareSendZigbeeCommandAction<
  GPredefinedProperties extends ZigbeeCommandForPredefinedPropertiesConstraint,
>(
  send: SendZigbeeCommandAction,
  predefinedZigbeeCommand: GPredefinedProperties,
): SendZigbeeCommandForExcludedPredefinedPropertiesAction<GPredefinedProperties> {
  return send.mapArguments(
    (
      command: ZigbeeCommandForExcludedPredefinedProperties<GPredefinedProperties>,
    ): [command: ZigbeeCommand] => {
      return [
        {
          ...command,
          ...predefinedZigbeeCommand,
        } as unknown as ZigbeeCommand,
      ];
    },
  );
}
