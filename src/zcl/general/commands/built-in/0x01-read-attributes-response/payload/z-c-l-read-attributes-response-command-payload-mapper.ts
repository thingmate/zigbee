import { Decoder, Encoder } from '@xstd/codec';

import type { ZCLPayloadMapper } from '../../../../../payload/mapper/z-c-l-payload-mapper.ts';
import { decodeZCLReadAttributesResponseCommandPayload } from './codec/decode-z-c-l-read-attributes-response-command-payload.ts';
import { encodeZCLReadAttributesResponseCommandPayload } from './codec/encode-z-c-l-read-attributes-response-command-payload.ts';
import type { ZCLReadAttributesResponseCommandPayload } from './z-c-l-read-attributes-response-command-payload.ts';

export type ZCLReadAttributesResponseCommandPayloadMapper =
  ZCLPayloadMapper<ZCLReadAttributesResponseCommandPayload>;

export const ZCL_READ_ATTRIBUTES_RESPONSE_COMMAND_PAYLOAD_MAPPER: ZCLReadAttributesResponseCommandPayloadMapper =
  Object.freeze({
    inOut: (attributes: ZCLReadAttributesResponseCommandPayload): Uint8Array => {
      return Encoder.encode(attributes, encodeZCLReadAttributesResponseCommandPayload);
    },
    outIn: (payload: Uint8Array): ZCLReadAttributesResponseCommandPayload => {
      return Decoder.decode(payload, decodeZCLReadAttributesResponseCommandPayload);
    },
  });
