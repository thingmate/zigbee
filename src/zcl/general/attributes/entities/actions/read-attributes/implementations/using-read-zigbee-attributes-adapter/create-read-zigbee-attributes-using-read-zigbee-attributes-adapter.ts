import { type Abortable, abortableContext } from '@xstd/abortable';
import { type ZigbeeReadAttributesPayload } from '../../../../../../commands/0x00--read-attributes/types/zigbee-read-attributes-payload/zigbee-read-attributes-payload.js';
import { type ZigbeeReadAttributesResponsePayload } from '../../../../../../commands/0x01--read-attributes-response/types/zigbee-read-attributes-response-payload/zigbee-read-attributes-response-payload.js';
import { type ZigbeeReadAttributesStatusRecordField } from '../../../../../../commands/0x01--read-attributes-response/types/zigbee-read-attributes-status-record-field/zigbee-read-attributes-status-record-field.js';
import { type ReadZigbeeAttributes } from '../../read-zigbee-attributes.js';
import { type ReadZigbeeAttributesAdapter } from './adapter/read-zigbee-attributes-adapter.js';

export interface CreateReadZigbeeAttributesUsingReadZigbeeAttributesAdapterOptions
  extends ReadZigbeeAttributesAdapter {}

export function createReadZigbeeAttributesUsingReadZigbeeAttributesAdapter({
  send,
  observer,
}: CreateReadZigbeeAttributesUsingReadZigbeeAttributesAdapterOptions): ReadZigbeeAttributes {
  return (
    requestPayload: ZigbeeReadAttributesPayload,
    options?: Abortable,
  ): Promise<ZigbeeReadAttributesResponsePayload> => {
    return abortableContext(
      async (signal: AbortSignal): Promise<ZigbeeReadAttributesResponsePayload> => {
        return (
          await Promise.all([
            observer
              .filter((responsePayload: ZigbeeReadAttributesResponsePayload): boolean => {
                return requestPayload.every((requestAttributeId: number): boolean => {
                  return responsePayload.some(
                    ({ id }: ZigbeeReadAttributesStatusRecordField): boolean => {
                      return id === requestAttributeId;
                    },
                  );
                });
              })
              .first(signal),
            send(requestPayload, { signal }),
          ])
        )[0];
      },
      options,
    );
  };
}
