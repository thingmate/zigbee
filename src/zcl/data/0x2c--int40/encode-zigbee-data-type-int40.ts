import { type Encoder, encodeInt40LE } from '@xstd/codec';

export function encodeZigbeeDataTypeInt40(encoder: Encoder, input: number): void {
  encodeInt40LE(encoder, input);
}
