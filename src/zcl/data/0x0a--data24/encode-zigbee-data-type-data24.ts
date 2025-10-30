import { type Encoder } from '@xstd/codec';
import { encodeUint24LE } from '../shared.private/uint24/encode-uint24-l-e.js';

export function encodeZigbeeDataTypeData24(encoder: Encoder, input: number): void {
  encodeUint24LE(encoder, input);
}
