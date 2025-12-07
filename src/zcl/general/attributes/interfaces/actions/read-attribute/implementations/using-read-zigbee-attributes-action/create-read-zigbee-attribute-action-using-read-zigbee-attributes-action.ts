import { type ZigbeeReadAttributesPayload } from '../../../../../../commands/0x00--read-attributes/members/zigbee-read-attributes-payload/zigbee-read-attributes-payload.js';
import { type ZigbeeReadAttributesResponsePayload } from '../../../../../../commands/0x01--read-attributes-response/members/zigbee-read-attributes-response-payload/zigbee-read-attributes-response-payload.js';
import { isZigbeeReadAttributesStatusRecordFieldSuccess } from '../../../../../../commands/0x01--read-attributes-response/members/zigbee-read-attributes-status-record-field/success/is-zigbee-read-attributes-status-record-field-success.js';
import { type ReadZigbeeAttributesAction } from '../../../read-attributes/read-zigbee-attributes.action.js';
import { type ReadZigbeeAttributeAction } from '../../read-zigbee-attribute.action.js';

export interface CreateReadZigbeeAttributeActionUsingReadZigbeeAttributesActionOptions {
  readonly read: ReadZigbeeAttributesAction;
  readonly attributeId: number /* u16 */;
}

export function createReadZigbeeAttributeActionUsingReadZigbeeAttributesAction<GValue>({
  read,
  attributeId,
}: CreateReadZigbeeAttributeActionUsingReadZigbeeAttributesActionOptions): ReadZigbeeAttributeAction<GValue> {
  return read
    .mapArguments((): [payload: ZigbeeReadAttributesPayload] => {
      return [[attributeId]];
    })
    .then((responsePayload: ZigbeeReadAttributesResponsePayload): GValue => {
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
    });
}
