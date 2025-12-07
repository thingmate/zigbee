import { type Encoder, encodeUint48LE } from '@xstd/codec';

export function encodeZigbeeDataTypeUint48(encoder: Encoder, input: number): void {
  encodeUint48LE(encoder, input);
}
