import { DEFAULT_ENTITY_PROPERTY } from '@thingmate/entity';
import { type Abortable } from '@xstd/abortable';
import { type ReadZigbeeOnOffAttribute } from '../../../../attributes/0x0000--on-off/entities/actions/read/read-zigbee-on-off-attribute.js';
import { type ZigbeeOnOffAttributeObserver } from '../../../../attributes/0x0000--on-off/entities/events/observer/zigbee-on-off-attribute-observer.js';
import { type SendZigbeeOffCommand } from '../../../../commands/0x00--off/entities/actions/send/send-zigbee-off-command.js';
import { type SendZigbeeOnCommand } from '../../../../commands/0x01--on/entities/actions/send/send-zigbee-on-command.js';
import { type ZigbeeOnOffPropertyEntity } from '../../zigbee-on-off-property-entity.js';

export interface CreateZigbeeOnOffPropertyEntityUsingSubEntitiesOptions {
  readonly read: ReadZigbeeOnOffAttribute;
  readonly off: SendZigbeeOffCommand;
  readonly on: SendZigbeeOnCommand;
  readonly observer: ZigbeeOnOffAttributeObserver;
}

export function createZigbeeOnOffPropertyEntityUsingSubEntities({
  read,
  off,
  on,
  observer,
}: CreateZigbeeOnOffPropertyEntityUsingSubEntitiesOptions): ZigbeeOnOffPropertyEntity {
  return {
    ...DEFAULT_ENTITY_PROPERTY,
    get: read,
    set: (value: boolean, options?: Abortable): Promise<void> => {
      if (value) {
        return on(options);
      } else {
        return off(options);
      }
    },
    observer,
  };
}
