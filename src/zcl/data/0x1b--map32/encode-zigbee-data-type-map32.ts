import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeUint32(encoder: Encoder, input: number): void {
  encoder.uint32LE(input);
}
