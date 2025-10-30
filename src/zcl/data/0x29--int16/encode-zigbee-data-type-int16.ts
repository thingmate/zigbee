import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeInt16(encoder: Encoder, input: number): void {
  encoder.int16LE(input);
}
