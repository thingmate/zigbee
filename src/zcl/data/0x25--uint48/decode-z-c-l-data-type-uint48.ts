import { type Decoder, decodeUint48LE } from '@xstd/codec';

export function decodeZCLDataTypeUint48(decoder: Decoder): number {
  return decodeUint48LE(decoder);
}
