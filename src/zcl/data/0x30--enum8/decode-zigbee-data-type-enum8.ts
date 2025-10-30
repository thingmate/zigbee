import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeEnum8(decoder: Decoder): number {
  return decoder.uint8();
}
