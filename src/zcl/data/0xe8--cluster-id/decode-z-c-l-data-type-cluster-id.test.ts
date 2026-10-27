import { Decoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeClusterId } from './decode-z-c-l-data-type-cluster-id.ts';

describe('decodeZCLDataTypeClusterId', (): void => {
  test('decodes 0x06.', (): void => {
    expect(Decoder.decode(new Uint8Array([0x06, 0x00]), decodeZCLDataTypeClusterId)).toBe(0x06);
  });
});
