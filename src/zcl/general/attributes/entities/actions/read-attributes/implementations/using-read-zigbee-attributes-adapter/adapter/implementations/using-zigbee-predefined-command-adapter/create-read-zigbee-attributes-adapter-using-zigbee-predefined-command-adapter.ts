import {
  createSendZigbeeReadAttributesCommandUsingSendZigbeePredefinedCommand,
  type CreateSendZigbeeReadAttributesCommandUsingSendZigbeePredefinedCommandOptions,
} from '../../../../../../../../../commands/0x00--read-attributes/entities/actions/send/implementations/using-send-zigbee-predefined-command/create-send-zigbee-read-attributes-command-using-send-zigbee-predefined-command.js';
import {
  createZigbeeReadAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserver,
  type CreateZigbeeReadAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserverOptions,
} from '../../../../../../../../../commands/0x01--read-attributes-response/entities/events/observer/implementations/using-zigbee-predefined-command-observer/create-zigbee-read-attributes-command-response-observer-using-zigbee-predefined-command-observer.js';
import { type ReadZigbeeAttributesAdapter } from '../../read-zigbee-attributes-adapter.js';

export interface CreateReadZigbeeAttributesAdapterUsingZigbeeCommandAdapterOptions
  extends CreateSendZigbeeReadAttributesCommandUsingSendZigbeePredefinedCommandOptions,
    CreateZigbeeReadAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserverOptions {}

export function createReadZigbeeAttributesAdapterUsingZigbeePredefinedCommandAdapter(
  options: CreateReadZigbeeAttributesAdapterUsingZigbeeCommandAdapterOptions,
): ReadZigbeeAttributesAdapter {
  return {
    send: createSendZigbeeReadAttributesCommandUsingSendZigbeePredefinedCommand(options),
    observer:
      createZigbeeReadAttributesCommandResponseObserverUsingZigbeePredefinedCommandObserver(
        options,
      ),
  };
}
