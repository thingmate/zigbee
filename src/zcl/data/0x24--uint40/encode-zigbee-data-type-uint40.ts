import { type Encoder } from '@xstd/codec';
import { encodeUint40LE } from '../__shared__/uint40/encode-uint40-l-e.js';

export function encodeZigbeeDataTypeUint40(encoder: Encoder, input: number): void {
  encodeUint40LE(encoder, input);
}
