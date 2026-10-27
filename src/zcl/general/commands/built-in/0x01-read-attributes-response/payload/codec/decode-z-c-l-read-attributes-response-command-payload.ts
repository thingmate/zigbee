import { type Decoder } from '@xstd/codec';
import { decodeZCLReadAttributesStatusRecordField } from '../../status-record-field/codec/decode-z-c-l-read-attributes-status-record-field.ts';
import type { ZCLReadAttributesStatusRecordField } from '../../status-record-field/z-c-l-read-attributes-status-record-field.ts';
import type { ZCLReadAttributesResponseCommandPayload } from '../z-c-l-read-attributes-response-command-payload.ts';

export function decodeZCLReadAttributesResponseCommandPayload(
  decoder: Decoder,
): ZCLReadAttributesResponseCommandPayload {
  const records: ZCLReadAttributesStatusRecordField[] = [];

  while (!decoder.done) {
    records.push(decodeZCLReadAttributesStatusRecordField(decoder));
  }

  return records;
}
