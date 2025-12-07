import { type Encoder, encodeUint56LE } from '@xstd/codec';

export function encodeZigbeeDataTypeUint56(encoder: Encoder, input: bigint | number): void {
  encodeUint56LE(encoder, input);
}
