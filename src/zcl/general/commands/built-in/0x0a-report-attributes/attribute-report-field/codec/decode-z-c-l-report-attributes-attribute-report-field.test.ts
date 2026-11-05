import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLReportAttributesAttributeReportField } from './decode-z-c-l-report-attributes-attribute-report-field.ts';

describe('decodeZCLReportAttributesAttributeReportField', (): void => {
  test('decodes an attribute report field.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x34, 0x12, 0x10, 0x01]),
        decodeZCLReportAttributesAttributeReportField,
      ),
    ).toEqual({ id: 0x1234, type: 0x10, value: true });
  });
});
