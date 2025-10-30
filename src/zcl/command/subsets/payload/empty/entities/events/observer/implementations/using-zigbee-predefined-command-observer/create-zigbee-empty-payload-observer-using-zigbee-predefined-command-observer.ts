import { NONE, type None } from '@xstd/none';
import { type ZigbeePredefinedCommandObserver } from '../../../../../../../predefined/entities/events/observer/zigbee-predefined-command-observer.js';
import {
  type ZigbeePredefinedCommand,
  type ZigbeePredefinedCommandPredefinedPropertiesConstraint,
} from '../../../../../../../predefined/zigbee-predefined-command.js';
import { type ZigbeeEmptyPayloadObserver } from '../../zigbee-empty-payload-observer.js';

export interface CreateZigbeePayloadObserverUsingZigbeePredefinedCommandObserverOptions<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
> {
  readonly observer: ZigbeePredefinedCommandObserver<GPredefinedProperties>;
  readonly commandPredefinedProperties: GPredefinedProperties;
}

export function createZigbeeEmptyPayloadObserverUsingZigbeePredefinedCommandObserver<
  GPredefinedProperties extends ZigbeePredefinedCommandPredefinedPropertiesConstraint,
>({
  observer,
  commandPredefinedProperties,
}: CreateZigbeePayloadObserverUsingZigbeePredefinedCommandObserverOptions<GPredefinedProperties>): ZigbeeEmptyPayloadObserver {
  return observer.mapFilter(
    (input: ZigbeePredefinedCommand<GPredefinedProperties>): void | None => {
      return Object.entries(commandPredefinedProperties).every(
        ([key, value]: [string, unknown]): boolean => {
          return value === Reflect.get(input, key);
        },
      )
        ? undefined
        : NONE;
    },
  );
}
