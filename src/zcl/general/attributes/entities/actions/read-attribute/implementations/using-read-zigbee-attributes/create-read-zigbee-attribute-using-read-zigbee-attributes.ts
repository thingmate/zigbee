import { type Abortable } from '@xstd/abortable';
import { type ZigbeeReadAttributesResponsePayload } from '../../../../../../commands/0x01--read-attributes-response/types/zigbee-read-attributes-response-payload/zigbee-read-attributes-response-payload.js';
import { isZigbeeReadAttributesStatusRecordFieldSuccess } from '../../../../../../commands/0x01--read-attributes-response/types/zigbee-read-attributes-status-record-field/success/is-zigbee-read-attributes-status-record-field-success.js';
import { type ReadZigbeeAttributes } from '../../../read-attributes/read-zigbee-attributes.js';
import { type ReadZigbeeAttribute } from '../../read-zigbee-attribute.js';

export interface CreateReadZigbeeAttributeUsingReadZigbeeAttributesOptions {
  readonly read: ReadZigbeeAttributes;
  readonly attributeId: number /* u16 */;
}

export function createReadZigbeeAttributeUsingReadZigbeeAttributes<GValue>({
  read,
  attributeId,
}: CreateReadZigbeeAttributeUsingReadZigbeeAttributesOptions): ReadZigbeeAttribute<GValue> {
  return async (options?: Abortable): Promise<GValue> => {
    const responsePayload: ZigbeeReadAttributesResponsePayload = await read([attributeId], options);

    for (const responseAttribute of responsePayload) {
      if (responseAttribute.id === attributeId) {
        if (isZigbeeReadAttributesStatusRecordFieldSuccess(responseAttribute)) {
          return responseAttribute.value as GValue;
        } else {
          throw new Error(
            responseAttribute.status === 0x86 ? 'UNSUPPORTED_ATTRIBUTE' : 'Unknown status',
          );
        }
      }
    }

    throw new Error('Response payload does not contain the requested attribute.');
  };
}
