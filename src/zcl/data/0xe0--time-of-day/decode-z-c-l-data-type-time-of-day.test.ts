import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeTimeOfDay } from './decode-z-c-l-data-type-time-of-day.ts';

describe('decodeZCLDataTypeTimeOfDay', (): void => {
  test('decodes a time of day.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x0d, 0x25, 0x2a, 0x63]), decodeZCLDataTypeTimeOfDay),
    ).toEqual({ hours: 13, minutes: 37, seconds: 42, hundredths: 99 });
  });
});
