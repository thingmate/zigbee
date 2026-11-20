import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeInt48(decoder: Decoder): number {
  return decoder.int48LE();
}
