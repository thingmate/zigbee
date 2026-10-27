import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeFloat32 } from './decode-z-c-l-data-type-float32.ts';

describe('decodeZCLDataTypeFloat32', (): void => {
  test('decodes 1.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x00, 0x00, 0x80, 0x3f]), decodeZCLDataTypeFloat32)).toBe(
      1,
    );
  });
});
