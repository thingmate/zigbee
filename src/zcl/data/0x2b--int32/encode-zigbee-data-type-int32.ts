import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeInt32(encoder: Encoder, input: number): void {
  encoder.int32LE(input);
}
