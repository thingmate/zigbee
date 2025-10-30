import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeMap8(decoder: Decoder): number {
  return decoder.uint8();
}
