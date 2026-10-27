import { type Encoder, encodeUint24LE } from '@xstd/codec';

export function encodeZCLDataTypeData24(encoder: Encoder, input: number): void {
  encodeUint24LE(encoder, input);
}
