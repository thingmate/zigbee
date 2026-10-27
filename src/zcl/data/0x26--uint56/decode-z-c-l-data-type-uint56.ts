import { type Decoder, decodeUint56LE } from '@xstd/codec';

export function decodeZCLDataTypeUint56(decoder: Decoder): bigint {
  return decodeUint56LE(decoder);
}
