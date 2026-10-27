import { type Decoder } from '@xstd/codec';
import { decodeZCLDataTypeUnknown } from '../../../../../../data/unknown/decode-z-c-l-data-type-unknown.ts';
import { type ZCLReportAttributesAttributeReportField } from '../z-c-l-report-attributes-attribute-report-field.ts';

export function decodeZCLReportAttributesAttributeReportField(
  decoder: Decoder,
): ZCLReportAttributesAttributeReportField {
  const id: number = decoder.uint16LE();
  const type: number = decoder.uint8();
  const value: unknown = decodeZCLDataTypeUnknown(decoder, type);

  return {
    id,
    type,
    value,
  };
}
