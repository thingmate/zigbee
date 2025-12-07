import { type Encoder } from '@xstd/codec';
import { encodeZigbeeDataTypeUnknown } from '../../../../../../data/unknown/encode-zigbee-data-type-unknown.js';
import { type ZigbeeAttributeReportField } from '../zigbee-attribute-report-field.js';

export function encodeZigbeeAttributeReportField(
  encoder: Encoder,
  { id, type, value }: ZigbeeAttributeReportField,
): void {
  encoder.uint16LE(id);
  encoder.uint8(type);
  encodeZigbeeDataTypeUnknown(encoder, type, value);
}
