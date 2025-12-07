import { type Encoder, encodeInt48LE } from '@xstd/codec';

export function encodeZigbeeDataTypeInt48(encoder: Encoder, input: number): void {
  encodeInt48LE(encoder, input);
}
