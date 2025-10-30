import { type Encoder } from '@xstd/codec';
import { encodeUint56LE } from '../shared.private/uint56/encode-uint56-l-e.js';

export function encodeZigbeeDataTypeData56(encoder: Encoder, input: bigint | number): void {
  encodeUint56LE(encoder, input);
}
