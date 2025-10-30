import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeUint8(encoder: Encoder, input: number): void {
  encoder.uint8(input);
}
