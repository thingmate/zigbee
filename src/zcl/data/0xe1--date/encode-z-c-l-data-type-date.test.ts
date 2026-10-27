import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeDate } from './encode-z-c-l-data-type-date.ts';

describe('encodeZCLDataTypeDate', (): void => {
  test('encodes a date.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeDate(encoder, { year: 119, month: 6, day: 15, dayOfWeek: 3 });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x77, 0x06, 0x0f, 0x03]));
  });
});
