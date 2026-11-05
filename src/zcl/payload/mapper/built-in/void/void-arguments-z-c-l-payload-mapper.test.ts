import { describe, expect, test } from 'vitest';
import { VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER } from './void-arguments-z-c-l-payload-mapper.ts';

describe('VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER', (): void => {
  test('encodes void arguments into an empty payload.', (): void => {
    expect(VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER.inOut([])).toEqual(new Uint8Array(0));
  });

  test('decodes an empty payload into void arguments.', (): void => {
    expect(VOID_ARGUMENTS_ZCL_PAYLOAD_MAPPER.outIn(new Uint8Array(0))).toEqual([]);
  });
});
