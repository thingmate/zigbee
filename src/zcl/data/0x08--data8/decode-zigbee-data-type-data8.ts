import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeData8(decoder: Decoder): number {
  return decoder.uint8();
}
