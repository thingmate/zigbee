import { type Encoder, encodeInt56LE } from '@xstd/codec';

export function encodeZigbeeDataTypeInt56(encoder: Encoder, input: bigint | number): void {
  encodeInt56LE(encoder, input);
}
