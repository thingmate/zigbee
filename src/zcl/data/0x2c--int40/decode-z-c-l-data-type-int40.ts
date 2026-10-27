import { decodeInt40LE, type Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt40(decoder: Decoder): number {
  return decodeInt40LE(decoder);
}
