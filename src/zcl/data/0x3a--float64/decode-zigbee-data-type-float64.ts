import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeFloat64(decoder: Decoder): number {
  return decoder.float64LE();
}
