import { type Decoder } from '@xstd/codec';
import { decodeZigbeeDataTypeUnknown } from '../../../../../../data/unknown/decode-zigbee-data-type-unknown.js';
import { type ZigbeeAttributeReportField } from '../zigbee-attribute-report-field.js';

export function decodeZigbeeAttributeReportField(decoder: Decoder): ZigbeeAttributeReportField {
  const id: number = decoder.uint16LE();
  const type: number = decoder.uint8();
  const value: unknown = decodeZigbeeDataTypeUnknown(decoder, type);

  return {
    id,
    type,
    value,
  };
}
