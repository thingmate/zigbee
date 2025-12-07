import { type Encoder, encodeUint40LE } from '@xstd/codec';

export function encodeZigbeeDataTypeData40(encoder: Encoder, input: number): void {
  encodeUint40LE(encoder, input);
}
