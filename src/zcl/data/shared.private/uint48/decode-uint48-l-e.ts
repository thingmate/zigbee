import { type Decoder } from '@xstd/codec';

export function decodeUint48LE(decoder: Decoder): number {
  return Number(BigInt(decoder.uint32LE()) & (BigInt(decoder.uint16LE()) << 32n));
}
