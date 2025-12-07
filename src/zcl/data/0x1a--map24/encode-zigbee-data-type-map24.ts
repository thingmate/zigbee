import { type Encoder, encodeUint24LE } from '@xstd/codec';

export function encodeZigbeeDataTypeMap24(encoder: Encoder, input: number): void {
  encodeUint24LE(encoder, input);
}
