import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeUint16(decoder: Decoder): number {
  return decoder.uint16LE();
}
