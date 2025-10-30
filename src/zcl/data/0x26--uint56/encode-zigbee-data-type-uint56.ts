import { type Encoder } from '@xstd/codec';
import { encodeUint56LE } from '../__shared__/uint56/encode-uint56-l-e.js';

export function encodeZigbeeDataTypeUint56(encoder: Encoder, input: bigint | number): void {
  encodeUint56LE(encoder, input);
}
