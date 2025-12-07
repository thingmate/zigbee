import { type SendZigbeeReadAttributesCommandAction } from '../../../../../../../commands/0x00--read-attributes/interfaces/actions/send/send-zigbee-read-attributes-command.action.js';
import { type ObserveZigbeeReadAttributesResponseCommandFlow } from '../../../../../../../commands/0x01--read-attributes-response/interfaces/flows/observe/observe-zigbee-read-attributes-response-command.flow.js';

export interface ReadZigbeeAttributesAdapter {
  readonly send: SendZigbeeReadAttributesCommandAction;
  readonly observe: ObserveZigbeeReadAttributesResponseCommandFlow;
}
