import { type Encoder, encodeUint40LE } from '@xstd/codec';

export function encodeZCLDataTypeMap40(encoder: Encoder, input: number): void {
  encodeUint40LE(encoder, input);
}
