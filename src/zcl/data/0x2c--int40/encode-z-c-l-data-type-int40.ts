import { encodeInt40LE, type Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt40(encoder: Encoder, input: number): void {
  encodeInt40LE(encoder, input);
}
