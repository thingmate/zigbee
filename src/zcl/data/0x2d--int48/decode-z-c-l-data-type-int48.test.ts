import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeInt48 } from './decode-z-c-l-data-type-int48.ts';

describe('decodeZCLDataTypeInt48', (): void => {
  test('decodes -140737488355328.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x80]), decodeZCLDataTypeInt48),
    ).toBe(-140737488355328);
  });

  test('decodes 140737488355327.', (): void => {
    expect(
      Decoder.decode(new Uint8Array([0xff, 0xff, 0xff, 0xff, 0xff, 0x7f]), decodeZCLDataTypeInt48),
    ).toBe(140737488355327);
  });
});
