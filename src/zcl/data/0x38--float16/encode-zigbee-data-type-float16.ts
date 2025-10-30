import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeFloat16(encoder: Encoder, input: number): void {
  encoder.float16LE(input);
}
