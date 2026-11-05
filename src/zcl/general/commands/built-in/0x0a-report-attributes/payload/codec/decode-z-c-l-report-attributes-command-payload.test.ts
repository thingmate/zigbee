import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLReportAttributesCommandPayload } from './decode-z-c-l-report-attributes-command-payload.ts';

describe('decodeZCLReportAttributesCommandPayload', (): void => {
  test('decodes an empty payload.', (): void => {
    expect(Decoder.decode(new Uint8Array([]), decodeZCLReportAttributesCommandPayload)).toEqual([]);
  });

  test('decodes the attribute report fields.', (): void => {
    expect(
      Decoder.decode(
        new Uint8Array([0x34, 0x12, 0x10, 0x01, 0x78, 0x56, 0x20, 0xff]),
        decodeZCLReportAttributesCommandPayload,
      ),
    ).toEqual([
      { id: 0x1234, type: 0x10, value: true },
      { id: 0x5678, type: 0x20, value: 255 },
    ]);
  });
});
