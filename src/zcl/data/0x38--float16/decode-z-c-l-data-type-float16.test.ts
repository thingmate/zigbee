import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeFloat16 } from './decode-z-c-l-data-type-float16.ts';

describe('decodeZCLDataTypeFloat16', (): void => {
  test('decodes 1.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00, 0x3c]), decodeZCLDataTypeFloat16)).toBe(1);
  });
});
