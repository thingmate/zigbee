import { type Decoder } from '@xstd/codec';
import { decodeZigbeeReadAttributesStatusRecordFieldError } from '../error/codec/decode-zigbee-read-attributes-status-record-field-error.js';
import { decodeZigbeeReadAttributesStatusRecordFieldSuccess } from '../success/codec/decode-zigbee-read-attributes-status-record-field-success.js';
import { type ZigbeeReadAttributesStatusRecordField } from '../zigbee-read-attributes-status-record-field.js';

export function decodeZigbeeReadAttributesResponseStatusRecord(
  decoder: Decoder,
): ZigbeeReadAttributesStatusRecordField {
  const id: number = decoder.uint16LE();
  const status: number = decoder.uint8();

  if (status === 0x00) {
    return decodeZigbeeReadAttributesStatusRecordFieldSuccess(decoder, {
      id,
      status,
    });
  } else if (status === 0x86) {
    return decodeZigbeeReadAttributesStatusRecordFieldError(decoder, {
      id,
      status,
    });
  } else {
    throw new Error(`Unknown status: ${status}`);
  }
}
