import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLReportAttributesAttributeReportField } from './encode-z-c-l-report-attributes-attribute-report-field.ts';

describe('encodeZCLReportAttributesAttributeReportField', (): void => {
  test('encodes an attribute report field.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReportAttributesAttributeReportField(encoder, { id: 0x1234, type: 0x10, value: true });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x34, 0x12, 0x10, 0x01]));
  });
});
