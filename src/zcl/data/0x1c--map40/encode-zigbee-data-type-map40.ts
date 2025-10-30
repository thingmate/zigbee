import { type Encoder } from '@xstd/codec';
import { encodeUint40LE } from '../shared.private/uint40/encode-uint40-l-e.js';

export function encodeZigbeeDataTypeMap40(encoder: Encoder, input: number): void {
  encodeUint40LE(encoder, input);
}
