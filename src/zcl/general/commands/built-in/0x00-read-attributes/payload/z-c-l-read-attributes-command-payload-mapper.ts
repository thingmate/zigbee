import { Decoder, Encoder } from '@xstd/codec';

import type { ZCLPayloadMapper } from '../../../../../payload/mapper/z-c-l-payload-mapper.ts';
import { decodeZCLReadAttributesCommandPayload } from './codec/decode-z-c-l-read-attributes-command-payload.ts';
import { encodeZCLReadAttributesCommandPayload } from './codec/encode-z-c-l-read-attributes-command-payload.ts';
import type { ZCLReadAttributesCommandPayload } from './z-c-l-read-attributes-command-payload.ts';

export type ZCLReadAttributesCommandPayloadMapper =
  ZCLPayloadMapper<ZCLReadAttributesCommandPayload>;

export const ZCL_READ_ATTRIBUTES_COMMAND_PAYLOAD_MAPPER: ZCLReadAttributesCommandPayloadMapper =
  Object.freeze({
    inOut: (attributes: ZCLReadAttributesCommandPayload): Uint8Array => {
      return Encoder.encode(attributes, encodeZCLReadAttributesCommandPayload);
    },
    outIn: (payload: Uint8Array): ZCLReadAttributesCommandPayload => {
      return Decoder.decode(payload, decodeZCLReadAttributesCommandPayload);
    },
  });
