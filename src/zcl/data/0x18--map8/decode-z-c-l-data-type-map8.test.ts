import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeMap8 } from './decode-z-c-l-data-type-map8.ts';

describe('decodeZCLDataTypeMap8', (): void => {
  test('decodes 0xa5.', (): void => {
    expect(Decoder.decode(new Uint8Array([0xa5]), decodeZCLDataTypeMap8)).toBe(0xa5);
  });
});
