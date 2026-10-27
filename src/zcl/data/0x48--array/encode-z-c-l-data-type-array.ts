import type { Encoder } from '@xstd/codec';
import { encodeZCLDataTypeUnknown } from '../unknown/encode-z-c-l-data-type-unknown.ts';
import type { ZCLDataTypeArray } from './z-c-l-data-type-array.ts';

export function encodeZCLDataTypeArray(encoder: Encoder, input: ZCLDataTypeArray): void {
  if (input.values.length >= 0xffff) {
    throw new Error('Array length excess 65534.');
  }

  encoder.uint8(input.elementType);
  encoder.uint16LE(input.values.length);

  for (const value of input.values) {
    encodeZCLDataTypeUnknown(encoder, input.elementType, value);
  }
}
