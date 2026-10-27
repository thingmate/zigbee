import { type Encoder } from '@xstd/codec';
import { encodeZCLDataTypeUnknown } from '../../../../../../data/unknown/encode-z-c-l-data-type-unknown.ts';
import { type ZCLReportAttributesAttributeReportField } from '../z-c-l-report-attributes-attribute-report-field.ts';

export function encodeZCLReportAttributesAttributeReportField(
  encoder: Encoder,
  record: ZCLReportAttributesAttributeReportField,
): void {
  encoder.uint16LE(record.id);
  encoder.uint8(record.type);
  encodeZCLDataTypeUnknown(encoder, record.type, record.value);
}
