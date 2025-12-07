import { type Encoder } from '@xstd/codec';

export function encodeZigbeeReadAttributesPayload(
  encoder: Encoder,
  attributes: Iterable<number>,
): void {
  encoder.iterable(attributes, (encoder: Encoder, attribute: number): void => {
    encoder.uint16LE(attribute);
  });
}
