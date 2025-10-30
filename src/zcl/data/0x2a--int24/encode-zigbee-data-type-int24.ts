import { type Encoder } from '@xstd/codec';
import { encodeInt24LE } from '../shared.private/int24/encode-int24-l-e.js';

export function encodeZigbeeDataTypeInt24(encoder: Encoder, input: number): void {
  encodeInt24LE(encoder, input);
}
