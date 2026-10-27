import type { Decoder } from '@xstd/codec';
import { decodeZCLDataTypeData8 } from '../0x08--data8/decode-z-c-l-data-type-data8.ts';
import { decodeZCLDataTypeData16 } from '../0x09--data16/decode-z-c-l-data-type-data16.ts';
import { decodeZCLDataTypeData24 } from '../0x0a--data24/decode-z-c-l-data-type-data24.ts';
import { decodeZCLDataTypeData32 } from '../0x0b--data32/decode-z-c-l-data-type-data32.ts';
import { decodeZCLDataTypeData40 } from '../0x0c--data40/decode-z-c-l-data-type-data40.ts';
import { decodeZCLDataTypeData48 } from '../0x0d--data48/decode-z-c-l-data-type-data48.ts';
import { decodeZCLDataTypeData56 } from '../0x0d--data56/decode-z-c-l-data-type-data56.ts';
import { decodeZCLDataTypeData64 } from '../0x0f--data64/decode-z-c-l-data-type-data64.ts';
import { decodeZCLDataTypeBoolean } from '../0x10--boolean/decode-z-c-l-data-type-boolean.ts';
import { decodeZCLDataTypeMap8 } from '../0x18--map8/decode-z-c-l-data-type-map8.ts';
import { decodeZCLDataTypeMap16 } from '../0x19--map16/decode-z-c-l-data-type-map16.ts';
import { decodeZCLDataTypeMap24 } from '../0x1a--map24/decode-z-c-l-data-type-map24.ts';
import { decodeZCLDataTypeMap32 } from '../0x1b--map32/decode-z-c-l-data-type-map32.ts';
import { decodeZCLDataTypeMap40 } from '../0x1c--map40/decode-z-c-l-data-type-map40.ts';
import { decodeZCLDataTypeMap48 } from '../0x1d--map48/decode-z-c-l-data-type-map48.ts';
import { decodeZCLDataTypeMap56 } from '../0x1e--map56/decode-z-c-l-data-type-map56.ts';
import { decodeZCLDataTypeMap64 } from '../0x1f--map64/decode-z-c-l-data-type-map64.ts';
import { decodeZCLDataTypeUint8 } from '../0x20--uint8/decode-z-c-l-data-type-uint8.ts';
import { decodeZCLDataTypeUint16 } from '../0x21--uint16/decode-z-c-l-data-type-uint16.ts';
import { decodeZCLDataTypeUint24 } from '../0x22--uint24/decode-z-c-l-data-type-uint24.ts';
import { decodeZCLDataTypeUint32 } from '../0x23--uint32/decode-z-c-l-data-type-uint32.ts';
import { decodeZCLDataTypeUint40 } from '../0x24--uint40/decode-z-c-l-data-type-uint40.ts';
import { decodeZCLDataTypeUint48 } from '../0x25--uint48/decode-z-c-l-data-type-uint48.ts';
import { decodeZCLDataTypeUint56 } from '../0x26--uint56/decode-z-c-l-data-type-uint56.ts';
import { decodeZCLDataTypeUint64 } from '../0x27--uint64/decode-z-c-l-data-type-uint64.ts';
import { decodeZCLDataTypeInt8 } from '../0x28--int8/decode-z-c-l-data-type-int8.ts';
import { decodeZCLDataTypeInt16 } from '../0x29--int16/decode-z-c-l-data-type-int16.ts';
import { decodeZCLDataTypeInt24 } from '../0x2a--int24/decode-z-c-l-data-type-int24.ts';
import { decodeZCLDataTypeInt32 } from '../0x2b--int32/decode-z-c-l-data-type-int32.ts';
import { decodeZCLDataTypeInt40 } from '../0x2c--int40/decode-z-c-l-data-type-int40.ts';
import { decodeZCLDataTypeInt48 } from '../0x2d--int48/decode-z-c-l-data-type-int48.ts';
import { decodeZCLDataTypeInt56 } from '../0x2e--int56/decode-z-c-l-data-type-int56.ts';
import { decodeZCLDataTypeInt64 } from '../0x2f--int64/decode-z-c-l-data-type-int64.ts';
import { decodeZCLDataTypeEnum8 } from '../0x30--enum8/decode-z-c-l-data-type-enum8.ts';
import { decodeZCLDataTypeEnum16 } from '../0x31--enum16/decode-z-c-l-data-type-enum16.ts';
import { decodeZCLDataTypeFloat16 } from '../0x38--float16/decode-z-c-l-data-type-float16.ts';
import { decodeZCLDataTypeFloat32 } from '../0x39--float32/decode-z-c-l-data-type-float32.ts';
import { decodeZCLDataTypeFloat64 } from '../0x3a--float64/decode-z-c-l-data-type-float64.ts';
import { decodeZCLDataTypeString } from '../0x42--string/decode-z-c-l-data-type-string.ts';
import { decodeZCLDataTypeArray } from '../0x48--array/decode-z-c-l-data-type-array.ts';

export function decodeZCLDataTypeUnknown(decoder: Decoder, dataType: number): unknown {
  switch (dataType) {
    case 0x08:
      return decodeZCLDataTypeData8(decoder);
    case 0x09:
      return decodeZCLDataTypeData16(decoder);
    case 0x0a:
      return decodeZCLDataTypeData24(decoder);
    case 0x0b:
      return decodeZCLDataTypeData32(decoder);
    case 0x0c:
      return decodeZCLDataTypeData40(decoder);
    case 0x0d:
      return decodeZCLDataTypeData48(decoder);
    case 0x0e:
      return decodeZCLDataTypeData56(decoder);
    case 0x0f:
      return decodeZCLDataTypeData64(decoder);
    case 0x10:
      return decodeZCLDataTypeBoolean(decoder);
    case 0x18:
      return decodeZCLDataTypeMap8(decoder);
    case 0x19:
      return decodeZCLDataTypeMap16(decoder);
    case 0x1a:
      return decodeZCLDataTypeMap24(decoder);
    case 0x1b:
      return decodeZCLDataTypeMap32(decoder);
    case 0x1c:
      return decodeZCLDataTypeMap40(decoder);
    case 0x1d:
      return decodeZCLDataTypeMap48(decoder);
    case 0x1e:
      return decodeZCLDataTypeMap56(decoder);
    case 0x1f:
      return decodeZCLDataTypeMap64(decoder);
    case 0x20:
      return decodeZCLDataTypeUint8(decoder);
    case 0x21:
      return decodeZCLDataTypeUint16(decoder);
    case 0x22:
      return decodeZCLDataTypeUint24(decoder);
    case 0x23:
      return decodeZCLDataTypeUint32(decoder);
    case 0x24:
      return decodeZCLDataTypeUint40(decoder);
    case 0x25:
      return decodeZCLDataTypeUint48(decoder);
    case 0x26:
      return decodeZCLDataTypeUint56(decoder);
    case 0x27:
      return decodeZCLDataTypeUint64(decoder);
    case 0x28:
      return decodeZCLDataTypeInt8(decoder);
    case 0x29:
      return decodeZCLDataTypeInt16(decoder);
    case 0x2a:
      return decodeZCLDataTypeInt24(decoder);
    case 0x2b:
      return decodeZCLDataTypeInt32(decoder);
    case 0x2c:
      return decodeZCLDataTypeInt40(decoder);
    case 0x2d:
      return decodeZCLDataTypeInt48(decoder);
    case 0x2e:
      return decodeZCLDataTypeInt56(decoder);
    case 0x2f:
      return decodeZCLDataTypeInt64(decoder);
    case 0x30:
      return decodeZCLDataTypeEnum8(decoder);
    case 0x31:
      return decodeZCLDataTypeEnum16(decoder);
    case 0x38:
      return decodeZCLDataTypeFloat16(decoder);
    case 0x39:
      return decodeZCLDataTypeFloat32(decoder);
    case 0x3a:
      return decodeZCLDataTypeFloat64(decoder);
    case 0x41:
      // TODO 0x41 (octstr)
      throw new Error('Missing implementation of octstr.');
    case 0x42:
      return decodeZCLDataTypeString(decoder);
    case 0x43:
      // TODO 0x43 (octstr16)
      throw new Error('Missing implementation of octstr16.');
    case 0x44:
      // TODO 0x44 (string16)
      throw new Error('Missing implementation of string16.');
    case 0x48:
      return decodeZCLDataTypeArray(decoder);
    // TODO 0x4c (struct)
    // TODO others
    default:
      throw new Error(`Unsupported data type: 0x${dataType.toString(16).padStart(2, '0')}.`);
  }
}
