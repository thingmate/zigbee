import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeData8(encoder: Encoder, input: number): void {
  encoder.uint8(input);
}
