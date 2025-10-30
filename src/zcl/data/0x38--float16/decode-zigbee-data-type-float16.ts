import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeFloat16(decoder: Decoder): number {
  return decoder.float16LE();
}
