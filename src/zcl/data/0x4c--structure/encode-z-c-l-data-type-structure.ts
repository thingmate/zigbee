import type { Encoder } from '@xstd/codec';
import { encodeZCLDataTypeUnknown } from '../unknown/encode-z-c-l-data-type-unknown.ts';
import type { ZCLDataTypeStructure } from './z-c-l-data-type-structure.ts';

export function encodeZCLDataTypeStructure(encoder: Encoder, input: ZCLDataTypeStructure): void {
  if (input.fields.length >= 0xffff) {
    throw new Error('Structure field count excess 65534.');
  }

  encoder.uint16LE(input.fields.length);

  for (const field of input.fields) {
    encoder.uint8(field.dataType);
    encodeZCLDataTypeUnknown(encoder, field.dataType, field.value);
  }
}
