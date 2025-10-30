import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeEnum16(decoder: Decoder): number {
  return decoder.uint16LE();
}
