import type { VoidArguments } from '../../../../../misc/types/void-arguments.ts';
import type { ZCLPayloadMapper } from '../../z-c-l-payload-mapper.ts';

export type VoidArgumentsZCLPayloadMapper = ZCLPayloadMapper<VoidArguments>;

const EMPTY_UINT8_ARRAY: Readonly<Uint8Array> = Object.freeze(new Uint8Array(0));

const EMPTY_ARRAY: VoidArguments = Object.freeze([]);

export const VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER: VoidArgumentsZCLPayloadMapper = Object.freeze({
  inOut: (): Readonly<Uint8Array> => EMPTY_UINT8_ARRAY,
  outIn: (): VoidArguments => EMPTY_ARRAY,
} satisfies VoidArgumentsZCLPayloadMapper);
