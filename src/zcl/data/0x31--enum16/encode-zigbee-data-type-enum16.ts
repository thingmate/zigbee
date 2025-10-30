import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeEnum16(encoder: Encoder, input: number): void {
  encoder.uint16LE(input);
}
