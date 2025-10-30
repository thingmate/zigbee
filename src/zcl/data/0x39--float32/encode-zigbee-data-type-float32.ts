import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeFloat32(encoder: Encoder, input: number): void {
  encoder.float32LE(input);
}
