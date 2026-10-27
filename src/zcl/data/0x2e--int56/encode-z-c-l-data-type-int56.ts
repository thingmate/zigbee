import { encodeInt56LE, type Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt56(encoder: Encoder, input: bigint | number): void {
  encodeInt56LE(encoder, input);
}
