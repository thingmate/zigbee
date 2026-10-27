import { decodeInt48LE, type Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt48(decoder: Decoder): number {
  return decodeInt48LE(decoder);
}
