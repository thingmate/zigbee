import { type SendZigbeeDiscoverAttributesCommandAction } from '../../../../../../../commands/0x0c--discover-attributes/interfaces/actions/send/send-zigbee-discover-attributes-command.action.js';
import { type ObserveZigbeeDiscoverAttributesResponseCommandFlow } from '../../../../../../../commands/0x0d--discover-attributes-response/interfaces/flows/observe/observe-zigbee-discover-attributes-response-command.flow.js';

export interface DiscoverZigbeeAttributesAdapter {
  readonly send: SendZigbeeDiscoverAttributesCommandAction;
  readonly observe: ObserveZigbeeDiscoverAttributesResponseCommandFlow;
}
