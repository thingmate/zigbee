import { type Encoder } from '@xstd/codec';

export function encodeZigbeeDataTypeBoolean(encoder: Encoder, input: boolean): void {
  encoder.uint8(input ? 0x01 : 0x00);
}
