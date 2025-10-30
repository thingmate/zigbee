import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeInt16(decoder: Decoder): number {
  return decoder.int16LE();
}
