import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { encodeZCLDataTypeClusterId } from './encode-z-c-l-data-type-cluster-id.ts';

describe('encodeZCLDataTypeClusterId', (): void => {
  test('encodes 0x06.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeClusterId(encoder, 0x06);
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x06, 0x00]));
  });
});
