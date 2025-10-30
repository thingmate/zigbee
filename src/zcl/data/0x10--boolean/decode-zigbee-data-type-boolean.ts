import { type Decoder } from '@xstd/codec';

export function decodeZigbeeDataTypeBoolean(decoder: Decoder): boolean {
  return decoder.uint8() === 0x01;
}
