import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeData16(decoder: Decoder): number {
  return decoder.uint16LE();
}
