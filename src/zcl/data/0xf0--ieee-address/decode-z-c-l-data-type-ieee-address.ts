import type { Decoder } from '@xstd/codec';

export function decodeZCLDataTypeIeeeAddress(decoder: Decoder): bigint {
  return decoder.uint64LE();
}
