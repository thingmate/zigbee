import { type Encoder, encodeUint24LE } from '@xstd/codec';

export function encodeZigbeeDataTypeData24(encoder: Encoder, input: number): void {
  encodeUint24LE(encoder, input);
}
