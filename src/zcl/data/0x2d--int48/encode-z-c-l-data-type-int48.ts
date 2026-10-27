import { encodeInt48LE, type Encoder } from '@xstd/codec';

export function encodeZCLDataTypeInt48(encoder: Encoder, input: number): void {
  encodeInt48LE(encoder, input);
}
