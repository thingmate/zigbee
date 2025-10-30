import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeData64(encoder: Encoder, input: bigint | number): void {
  encoder.uint64LE(input);
}
