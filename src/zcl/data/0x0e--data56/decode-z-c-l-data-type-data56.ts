import { type Decoder, decodeUint56LE } from '@xstd/codec';

export function decodeZCLDataTypeData56(decoder: Decoder): bigint {
  return decodeUint56LE(decoder);
}
