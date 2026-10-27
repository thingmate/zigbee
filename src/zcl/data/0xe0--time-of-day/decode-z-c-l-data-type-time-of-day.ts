import type { Decoder } from '@xstd/codec';
import type { ZCLDataTypeTimeOfDay } from './z-c-l-data-type-time-of-day.ts';

export function decodeZCLDataTypeTimeOfDay(decoder: Decoder): ZCLDataTypeTimeOfDay {
  return {
    hours: decoder.uint8(),
    minutes: decoder.uint8(),
    seconds: decoder.uint8(),
    hundredths: decoder.uint8(),
  };
}
