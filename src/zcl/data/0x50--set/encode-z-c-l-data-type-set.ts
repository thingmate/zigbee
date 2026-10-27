import type { Encoder } from '@xstd/codec';
import { encodeZCLDataTypeArray } from '../0x48--array/encode-z-c-l-data-type-array.ts';
import type { ZCLDataTypeArray } from '../0x48--array/z-c-l-data-type-array.ts';

export function encodeZCLDataTypeSet(encoder: Encoder, input: ZCLDataTypeArray): void {
  encodeZCLDataTypeArray(encoder, input);
}
