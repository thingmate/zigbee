import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeUint32(decoder: Decoder): number {
  return decoder.uint32LE();
}
