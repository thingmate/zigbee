import { type Decoder } from '@xstd/codec';
import type { ZCLReadAttributesCommandPayload } from '../z-c-l-read-attributes-command-payload.ts';

export function decodeZCLReadAttributesCommandPayload(
  decoder: Decoder,
): ZCLReadAttributesCommandPayload {
  const attributes: number[] = [];

  while (!decoder.done) {
    attributes.push(decoder.uint16LE());
  }

  return attributes;
}
