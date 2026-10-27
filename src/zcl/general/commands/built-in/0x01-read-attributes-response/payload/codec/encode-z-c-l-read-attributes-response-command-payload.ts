import { type Encoder } from '@xstd/codec';
import { encodeZCLReadAttributesStatusRecordField } from '../../status-record-field/codec/encode-z-c-l-read-attributes-status-record-field.ts';
import type { ZCLReadAttributesStatusRecordField } from '../../status-record-field/z-c-l-read-attributes-status-record-field.ts';
import type { ZCLReadAttributesResponseCommandPayload } from '../z-c-l-read-attributes-response-command-payload.ts';

export function encodeZCLReadAttributesResponseCommandPayload(
  encoder: Encoder,
  payload: ZCLReadAttributesResponseCommandPayload,
): void {
  encoder.iterable(
    payload,
    (encoder: Encoder, attributeStatusRecordField: ZCLReadAttributesStatusRecordField): void => {
      encoder.encode(attributeStatusRecordField, encodeZCLReadAttributesStatusRecordField);
    },
  );
}
