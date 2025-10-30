import { type DecodeFunction, Decoder } from '@xstd/codec';
import { NONE, type None } from '@xstd/none';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import {
  type ZigbeePredefinedCommand,
  type ZigbeePredefinedCommandPredefinedPropertiesConstraint,
} from '../../../../../../../predefined/zigbee-predefined-command.js';
import { type ZigbeeDecodedPayloadObserver } from '../../zigbee-decoded-payload-observer.js';

export interface CreateZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserverOptions<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
  GPayload,
> {
  readonly observer: ZigbeePredefinedCommandObserver<GPredefinedProperties>;
  readonly commandPredefinedProperties: GPredefinedProperties;
  readonly decode: DecodeFunction<GPayload>;
}

export function createZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserver<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
  GPayload,
>({
  observer,
  commandPredefinedProperties,
  decode,
}: CreateZigbeeDecodedPayloadObserverUsingZigbeePredefinedCommandObserverOptions<
  GPredefinedProperties,
  GPayload
>): ZigbeeDecodedPayloadObserver<GPayload> {
  return observer.mapFilter(
    (input: ZigbeePredefinedCommand<GPredefinedProperties>): GPayload | None => {
      return Object.entries(commandPredefinedProperties).every(
        ([key, value]: [string, unknown]): boolean => {
          return value === Reflect.get(input, key);
        },
      )
        ? Decoder.decode(input.payload, decode)
        : NONE;
    },
  );
}
