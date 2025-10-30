import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeInt64(encoder: Encoder, input: bigint | number): void {
  encoder.int64LE(input);
}
