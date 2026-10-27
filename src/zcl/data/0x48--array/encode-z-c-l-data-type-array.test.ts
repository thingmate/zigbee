import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import { decodeZCLDataTypeArray } from './decode-z-c-l-data-type-array.ts';
import { encodeZCLDataTypeArray } from './encode-z-c-l-data-type-array.ts';

describe('encodeZCLDataTypeArray', (): void => {
  test('encodes an array.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeArray(encoder, { elementType: 0x20, values: [5, 7] });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x20, 0x02, 0x00, 0x05, 0x07]));
  });

  test('encodes an empty array.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeArray(encoder, { elementType: 0x20, values: [] });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x20, 0x00, 0x00]));
  });

  test('encodes an array of 65534 elements.', (): void => {
    const encoder: Encoder = new Encoder();
    const values: readonly unknown[] = new Array(65534).fill(0);
    encodeZCLDataTypeArray(encoder, { elementType: 0x20, values });
    const bytes: Uint8Array = encoder.toUint8Array();
    expect(bytes.length).toBe(65537);
    expect(bytes[0]).toBe(0x20);
    expect(bytes[1]).toBe(0xfe);
    expect(bytes[2]).toBe(0xff);
    expect(decodeZCLDataTypeArray(encoder.toDecoder())).toEqual({ elementType: 0x20, values });
  });

  test('throws on an array of 65535 elements.', (): void => {
    const encoder: Encoder = new Encoder();
    expect((): void => {
      encodeZCLDataTypeArray(encoder, { elementType: 0x20, values: new Array(65535).fill(0) });
    }).toThrow('Array length excess 65534.');
  });
});
