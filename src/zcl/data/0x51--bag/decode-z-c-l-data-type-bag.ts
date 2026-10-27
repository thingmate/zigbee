import type { Decoder } from '@xstd/codec';
import { decodeZCLDataTypeArray } from '../0x48--array/decode-z-c-l-data-type-array.ts';
import type { ZCLDataTypeArray } from '../0x48--array/z-c-l-data-type-array.ts';

export function decodeZCLDataTypeBag(decoder: Decoder): ZCLDataTypeArray {
  return decodeZCLDataTypeArray(decoder);
}
