import { decodeInt56LE, type Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt56(decoder: Decoder): bigint {
  return decodeInt56LE(decoder);
}
