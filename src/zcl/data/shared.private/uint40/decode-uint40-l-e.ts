import { type Decoder } from '@xstd/codec';

export function decodeUint40LE(decoder: Decoder): number {
  return Number(BigInt(decoder.uint32LE()) & (BigInt(decoder.uint8()) << 32n));
}
