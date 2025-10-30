import { type Encoder } from '@xstd/codec';
import { encodeUint48LE } from '../__shared__/uint48/encode-uint48-l-e.js';

export function encodeZigbeeDataTypeData48(encoder: Encoder, input: number): void {
  encodeUint48LE(encoder, input);
}
