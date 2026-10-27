import type { Decoder } from '@xstd/codec';
import type { ZCLDataTypeDate } from './z-c-l-data-type-date.ts';

export function decodeZCLDataTypeDate(decoder: Decoder): ZCLDataTypeDate {
  return {
    year: decoder.uint8(),
    month: decoder.uint8(),
    day: decoder.uint8(),
    dayOfWeek: decoder.uint8(),
  };
}
