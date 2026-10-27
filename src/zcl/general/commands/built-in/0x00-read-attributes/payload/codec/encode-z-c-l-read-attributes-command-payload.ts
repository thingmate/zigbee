import { type Encoder } from '@xstd/codec';
import type { ZCLReadAttributesCommandPayload } from '../z-c-l-read-attributes-command-payload.ts';

export function encodeZCLReadAttributesCommandPayload(
  encoder: Encoder,
  payload: ZCLReadAttributesCommandPayload,
): void {
  encoder.iterable(payload, (encoder: Encoder, attribute: number /* u 16 */): void => {
    encoder.uint16LE(attribute);
  });
}
