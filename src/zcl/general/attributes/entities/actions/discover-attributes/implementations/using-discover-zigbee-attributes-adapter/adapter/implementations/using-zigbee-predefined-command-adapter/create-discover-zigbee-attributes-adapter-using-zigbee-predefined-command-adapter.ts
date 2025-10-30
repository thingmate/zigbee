import {
  createSendZigbeeDiscoverAttributesCommandUsingSendZigbeePredefinedCommand,
  type CreateSendZigbeeDiscoverAttributesCommandUsingSendZigbeePredefinedCommandOptions,
} from '../../../../../../../../../commands/0x0c--discover-attributes/entities/actions/send/implementations/using-send-zigbee-predefined-command/create-send-zigbee-discover-attributes-command-using-send-zigbee-predefined-command.js';
import {
  createZigbeeDiscoverAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserver,
  type CreateZigbeeDiscoverAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserverOptions,
} from '../../../../../../../../../commands/0x0d--discover-attributes-response/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-discover-attributes-command-response-observer-using-zigbee-predefined-command-observer.js';
import { type DiscoverZigbeeAttributesAdapter } from '../../discover-zigbee-attributes-adapter.js';

export interface CreateDiscoverZigbeeAttributesAdapterUsingZigbeeCommandAdapterOptions
  extends CreateSendZigbeeDiscoverAttributesCommandUsingSendZigbeePredefinedCommandOptions,
    CreateZigbeeDiscoverAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserverOptions {}

export function createDiscoverZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter(
  options: CreateDiscoverZigbeeAttributesAdapterUsingZigbeeCommandAdapterOptions,
): DiscoverZigbeeAttributesAdapter {
  return {
    send: createSendZigbeeDiscoverAttributesCommandUsingSendZigbeePredefinedCommand(options),
    observer:
      createZigbeeDiscoverAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserver(
        options,
      ),
  };
}
