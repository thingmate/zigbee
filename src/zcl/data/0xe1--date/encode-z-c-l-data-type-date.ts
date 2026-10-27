import type { Encoder } from '@xstd/codec';
import type { ZCLDataTypeDate } from './z-c-l-data-type-date.ts';

export function encodeZCLDataTypeDate(encoder: Encoder, input: ZCLDataTypeDate): void {
  encoder.uint8(input.year).uint8(input.month).uint8(input.day).uint8(input.dayOfWeek);
}
