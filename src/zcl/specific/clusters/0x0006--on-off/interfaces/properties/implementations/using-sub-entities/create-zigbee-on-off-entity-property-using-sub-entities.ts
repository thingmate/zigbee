import { EntityProperty } from '@thingmate/entity';
import { Action } from '@xstd/action';
import { type ReadZigbeeOnOffAttributeAction } from '../../../../attributes/0x0000--on-off/interfaces/actions/read/read-zigbee-on-off-attribute.action.js';
import { type ObserveZigbeeOnOffAttributeFlow } from '../../../../attributes/0x0000--on-off/interfaces/flows/observe/observe-zigbee-on-off-attribute.flow.js';
import { type SendZigbeeOffCommandAction } from '../../../../commands/0x00--off/interfaces/actions/send/send-zigbee-off-command.action.js';
import { type SendZigbeeOnCommandAction } from '../../../../commands/0x01--on/interfaces/actions/send/send-zigbee-on-command.action.js';
import { type ZigbeeOnOffEntityProperty } from '../../zigbee-on-off-entity-property.js';

export interface CreateZigbeeOnOffEntityPropertyUsingSubEntitiesOptions {
  readonly read: ReadZigbeeOnOffAttributeAction;
  readonly off: SendZigbeeOffCommandAction;
  readonly on: SendZigbeeOnCommandAction;
  readonly observe: ObserveZigbeeOnOffAttributeFlow;
}

export function createZigbeeOnOffEntityPropertyUsingSubEntities({
  read,
  off,
  on,
  observe,
}: CreateZigbeeOnOffEntityPropertyUsingSubEntitiesOptions): ZigbeeOnOffEntityProperty {
  return new EntityProperty<boolean>({
    read,
    write: new Action<[value: boolean], void>(
      (signal: AbortSignal, value: boolean): Promise<void> => {
        if (value) {
          return on.invoke(signal);
        } else {
          return off.invoke(signal);
        }
      },
    ),
    observe,
  });
}
