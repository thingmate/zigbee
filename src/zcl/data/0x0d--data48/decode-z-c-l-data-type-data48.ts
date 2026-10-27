import { type Decoder, decodeUint48LE } from '@xstd/codec';

export function decodeZCLDataTypeData48(decoder: Decoder): number {
  return decodeUint48LE(decoder);
}
