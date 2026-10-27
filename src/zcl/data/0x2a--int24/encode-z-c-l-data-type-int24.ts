import { encodeInt24LE, type Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt24(encoder: Encoder, input: number): void {
  encodeInt24LE(encoder, input);
}
