import { type Abortable } from '@xstd/abortable';
import { type EncodeFunction, Encoder } from '@xstd/codec';
import { type SendZigbeePredefinedCommand } from '../../../../../../../predefined/entities/actions/send/send-zigbee-predefined-command.js';
import {
  type ZigbeePredefinedCommand,
  type ZigbeePredefinedCommandPredefinedPropertiesConstraint,
} from '../../../../../../../predefined/zigbee-predefined-command.js';
import { type SendZigbeeDecodedPayload } from '../../send-zigbee-decoded-payload.js';

export interface CreateSendZigbeeDecodedPayloadUsingSendZigbeePredefinedCommandOptions<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
  GPayload,
> {
  readonly send: SendZigbeePredefinedCommand<GPredefinedProperties>;
  readonly commandPredefinedProperties: GPredefinedProperties;
  readonly encode: EncodeFunction<GPayload>;
}

export function createSendZigbeeDecodedPayloadUsingSendZigbeePredefinedCommand<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
  GPayload,
>({
  send,
  commandPredefinedProperties,
  encode,
}: CreateSendZigbeeDecodedPayloadUsingSendZigbeePredefinedCommandOptions<
  GPredefinedProperties,
  GPayload
>): SendZigbeeDecodedPayload<GPayload> {
  return (payload: GPayload, options?: Abortable): Promise<void> => {
    return send(
      {
        ...commandPredefinedProperties,
        payload: Encoder.encode(payload, encode),
      } as ZigbeePredefinedCommand<GPredefinedProperties>,
      options,
    );
  };
}
