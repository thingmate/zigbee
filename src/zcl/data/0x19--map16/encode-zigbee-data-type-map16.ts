import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeMap16(encoder: Encoder, input: number): void {
  encoder.uint16LE(input);
}
