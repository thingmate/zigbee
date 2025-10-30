import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeUint8(decoder: Decoder): number {
  return decoder.uint8();
}
