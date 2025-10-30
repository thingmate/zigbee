import { type Abortable } from '@xstd/abortable';
import { type SendZigbeePredefinedCommand } from '../../../../../../../predefined/entities/actions/send/send-zigbee-predefined-command.js';
import {
  type ZigbeePredefinedCommand,
  type ZigbeePredefinedCommandPredefinedPropertiesConstraint,
} from '../../../../../../../predefined/zigbee-predefined-command.js';
import { type SendZigbeeEmptyPayload } from '../../send-zigbee-empty-payload.js';

export interface CreateSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommandOptions<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
> {
  readonly send: SendZigbeePredefinedCommand<GPredefinedProperties>;
  readonly commandPredefinedProperties: GPredefinedProperties;
}

export function createSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommand<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
>({
  send,
  commandPredefinedProperties,
}: CreateSendZigbeeEmptyPayloadUsingSendZigbeePredefinedCommandOptions<GPredefinedProperties>): SendZigbeeEmptyPayload {
  return (options?: Abortable): Promise<void> => {
    return send(
      {
        ...commandPredefinedProperties,
        payload: EMPTY_PAYLOAD,
      } as ZigbeePredefinedCommand<GPredefinedProperties>,
      options,
    );
  };
}

const EMPTY_PAYLOAD: Uint8Array = new Uint8Array(0);
