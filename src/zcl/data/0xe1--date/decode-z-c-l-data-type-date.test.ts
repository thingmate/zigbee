import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeDate } from './decode-z-c-l-data-type-date.ts';

describe('decodeZCLDataTypeDate', (): void => {
  test('decodes a date.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x77, 0x06, 0x0f, 0x03]), decodeZCLDataTypeDate)).toEqual(
      {
        year: 119,
        month: 6,
        day: 15,
        dayOfWeek: 3,
      },
    );
  });
});
