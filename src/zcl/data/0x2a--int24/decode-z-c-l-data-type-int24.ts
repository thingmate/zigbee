import { decodeInt24LE, type Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt24(decoder: Decoder): number {
  return decodeInt24LE(decoder);
}
