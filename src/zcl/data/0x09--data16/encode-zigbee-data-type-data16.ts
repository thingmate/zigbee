import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeData16(encoder: Encoder, input: number): void {
  encoder.uint16LE(input);
}
