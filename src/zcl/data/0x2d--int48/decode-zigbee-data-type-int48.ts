import { type Decoder, decodeInt48LE } from '@xstd/codec';

export function decodeZigbeeDataTypeInt48(decoder: Decoder): number {
  return decodeInt48LE(decoder);
}
