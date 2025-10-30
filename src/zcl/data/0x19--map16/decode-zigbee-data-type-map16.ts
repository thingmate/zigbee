import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeMap16(decoder: Decoder): number {
  return decoder.uint16LE();
}
