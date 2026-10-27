import type { Encoder } from '@xstd/codec';
import type { ZCLDataTypeTimeOfDay } from './z-c-l-data-type-time-of-day.ts';

export function encodeZCLDataTypeTimeOfDay(encoder: Encoder, input: ZCLDataTypeTimeOfDay): void {
  encoder.uint8(input.hours).uint8(input.minutes).uint8(input.seconds).uint8(input.hundredths);
}
