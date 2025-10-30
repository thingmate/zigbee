import { type Encoder } from '@xstd/codec';
import { encodeUint48LE } from '../shared.private/uint48/encode-uint48-l-e.js';

export function encodeZigbeeDataTypeMap48(encoder: Encoder, input: number): void {
  encodeUint48LE(encoder, input);
}
