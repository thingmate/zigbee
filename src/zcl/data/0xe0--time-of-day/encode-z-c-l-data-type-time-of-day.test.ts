import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeTimeOfDay } from './encode-z-c-l-data-type-time-of-day.ts';

describe('encodeZCLDataTypeTimeOfDay', (): void => {
  test('encodes a time of day.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeTimeOfDay(encoder, { hours: 13, minutes: 37, seconds: 42, hundredths: 99 });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x0d, 0x25, 0x2a, 0x63]));
  });
});
