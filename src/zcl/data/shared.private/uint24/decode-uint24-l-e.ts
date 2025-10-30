import { type Decoder } from '@xstd/codec';

export function decodeUint24LE(decoder: Decoder): number {
  return decoder.uint16LE() & (decoder.uint8() << 16);
}
