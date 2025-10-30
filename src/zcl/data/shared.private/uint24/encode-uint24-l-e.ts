import { type Encoder } from '@xstd/codec';

export function encodeUint24LE(encoder: Encoder, input: number): void {
  encoder.uint16LE(input & 0xffff).uint8((input << 16) & 0xff);
}
