import type { Decoder } from '@xstd/codec';
import { decodeZCLDataTypeUnknown } from '../unknown/decode-z-c-l-data-type-unknown.ts';
import type {
  ZCLDataTypeStructure,
  ZCLDataTypeStructureField,
} from './z-c-l-data-type-structure.ts';

export function decodeZCLDataTypeStructure(decoder: Decoder): ZCLDataTypeStructure {
  const fieldCount: number = decoder.uint16LE();

  if (fieldCount === 0xffff) {
    throw new Error('Invalid structure');
  }

  const fields: ZCLDataTypeStructureField[] = [];

  for (let index: number = 0; index < fieldCount; index++) {
    const dataType: number = decoder.uint8();
    fields.push({
      dataType,
      value: decodeZCLDataTypeUnknown(decoder, dataType),
    });
  }

  return {
    fields,
  };
}
