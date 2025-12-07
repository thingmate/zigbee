import { Action } from '@xstd/action';
import { type ZigbeeReadAttributesPayload } from '../../../../../../commands/0x00--read-attributes/members/zigbee-read-attributes-payload/zigbee-read-attributes-payload.js';
import { type ZigbeeReadAttributesResponsePayload } from '../../../../../../commands/0x01--read-attributes-response/members/zigbee-read-attributes-response-payload/zigbee-read-attributes-response-payload.js';
import { type ZigbeeReadAttributesStatusRecordField } from '../../../../../../commands/0x01--read-attributes-response/members/zigbee-read-attributes-status-record-field/zigbee-read-attributes-status-record-field.js';
import { type ReadZigbeeAttributesAction } from '../../read-zigbee-attributes.action.js';
import { type ReadZigbeeAttributesAdapter } from './adapter/read-zigbee-attributes-adapter.js';

export interface CreateReadZigbeeAttributesUsingReadZigbeeAttributesAdapterOptions extends ReadZigbeeAttributesAdapter {}

export function createReadZigbeeAttributesUsingReadZigbeeAttributesAdapter({
  send,
  observe,
}: CreateReadZigbeeAttributesUsingReadZigbeeAttributesAdapterOptions): ReadZigbeeAttributesAction {
  return Action.fromSendAndObserve<
    [payload: ZigbeeReadAttributesPayload],
    ZigbeeReadAttributesResponsePayload
  >({
    send,
    observe: new Action<
      [payload: ZigbeeReadAttributesPayload],
      ZigbeeReadAttributesResponsePayload
    >(
      (
        signal: AbortSignal,
        requestPayload: ZigbeeReadAttributesPayload,
      ): Promise<ZigbeeReadAttributesResponsePayload> => {
        return observe
          .filter((responsePayload: ZigbeeReadAttributesResponsePayload): boolean => {
            return requestPayload.every((requestAttributeId: number): boolean => {
              return responsePayload.some(
                ({ id }: ZigbeeReadAttributesStatusRecordField): boolean => {
                  return id === requestAttributeId;
                },
              );
            });
          })
          .first(signal);
      },
    ),
  });
}
