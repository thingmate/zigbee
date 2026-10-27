import { Encoder } from '@xstd/codec';
import { describe, expect, test } from 'vitest';
import type { ZCLDataTypeStructureField } from './z-c-l-data-type-structure.ts';
import { decodeZCLDataTypeStructure } from './decode-z-c-l-data-type-structure.ts';
import { encodeZCLDataTypeStructure } from './encode-z-c-l-data-type-structure.ts';

describe('encodeZCLDataTypeStructure', (): void => {
  test('encodes a structure.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeStructure(encoder, {
      fields: [
        { dataType: 0x20, value: 5 },
        { dataType: 0x10, value: true },
      ],
    });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x02, 0x00, 0x20, 0x05, 0x10, 0x01]));
  });

  test('encodes an empty structure.', (): void => {
    const encoder: Encoder = new Encoder();
    encodeZCLDataTypeStructure(encoder, { fields: [] });
    expect(encoder.toUint8Array()).toEqual(new Uint8Array([0x00, 0x00]));
  });

  test('encodes a structure of 65534 fields.', (): void => {
    const encoder: Encoder = new Encoder();
    const fields: readonly ZCLDataTypeStructureField[] = new Array(65534).fill({
      dataType: 0x20,
      value: 0,
    });
    encodeZCLDataTypeStructure(encoder, { fields });
    const bytes: Uint8Array = encoder.toUint8Array();
    expect(bytes.length).toBe(65536 + 65534);
    expect(bytes[0]).toBe(0xfe);
    expect(bytes[1]).toBe(0xff);
    expect(decodeZCLDataTypeStructure(encoder.toDecoder())).toEqual({ fields });
  });

  test('throws on a structure of 65535 fields.', (): void => {
    const encoder: Encoder = new Encoder();
    expect((): void => {
      encodeZCLDataTypeStructure(encoder, {
        fields: new Array(65535).fill({ dataType: 0x20, value: 0 }),
      });
    }).toThrow('Structure field count excess 65534.');
  });
});
