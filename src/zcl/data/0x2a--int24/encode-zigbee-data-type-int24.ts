import { type Encoder, encodeInt24LE } from '@xstd/codec';

export function encodeZigbeeDataTypeInt24(encoder: Encoder, input: number): void {
  encodeInt24LE(encoder, input);
}
