import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLReportAttributesCommandPayload } from './encode-z-c-l-report-attributes-command-payload.ts';

describe('encodeZCLReportAttributesCommandPayload', (): void => {
  test('encodes an empty payload.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReportAttributesCommandPayload(encoder, []);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([]));
  });

  test('encodes the attribute report fields.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLReportAttributesCommandPayload(encoder, [
      { id: 0x1234, type: 0x10, value: true },
      { id: 0x5678, type: 0x20, value: 255 },
    ]);
    expect(encoder.toUint8Array()).toEqual(
      new Uint8Array([0x34, 0x12, 0x10, 0x01, 0x78, 0x56, 0x20, 0xff]),
    );
  });
});
