import type { Decoder } from '@xstd/codec';
import { decodeZCLDataTypeUnknown } from '../unknown/decode-z-c-l-data-type-unknown.ts';
import type { ZCLDataTypeArray } from './z-c-l-data-type-array.ts';

export function decodeZCLDataTypeArray(decoder: Decoder): ZCLDataTypeArray {
  const elementType: number = decoder.uint8();
  const elementCount: number = decoder.uint16LE();

  if (elementCount === 0xffff) {
    throw new Error('Invalid array');
  }

  const values: unknown[] = [];

  for (let index: number = 0; index < elementCount; index++) {
    values.push(decodeZCLDataTypeUnknown(decoder, elementType));
  }

  return {
    elementType,
    values,
  };
}
