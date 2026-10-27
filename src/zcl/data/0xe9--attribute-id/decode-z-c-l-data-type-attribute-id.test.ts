import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeAttributeId } from './decode-z-c-l-data-type-attribute-id.ts';

describe('decodeZCLDataTypeAttributeId', (): void => {
  test('decodes 0x01.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x01, 0x00]), decodeZCLDataTypeAttributeId)).toBe(0x01);
  });
});
