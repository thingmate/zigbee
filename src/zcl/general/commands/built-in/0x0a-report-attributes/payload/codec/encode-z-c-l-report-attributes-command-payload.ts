import { type Encoder } from '@xstd/codec';
import { encodeZCLReportAttributesAttributeReportField } from '../../attribute-report-field/codec/encode-z-c-l-report-attributes-attribute-report-field.ts';
import type { ZCLReportAttributesAttributeReportField } from '../../attribute-report-field/z-c-l-report-attributes-attribute-report-field.ts';
import type { ZCLReportAttributesCommandPayload } from '../z-c-l-report-attributes-command-payload.ts';

export function encodeZCLReportAttributesCommandPayload(
  encoder: Encoder,
  payload: ZCLReportAttributesCommandPayload,
): void {
  encoder.iterable(
    payload,
    (encoder: Encoder, attributeReportField: ZCLReportAttributesAttributeReportField): void => {
      encoder.encode(attributeReportField, encodeZCLReportAttributesAttributeReportField);
    },
  );
}
