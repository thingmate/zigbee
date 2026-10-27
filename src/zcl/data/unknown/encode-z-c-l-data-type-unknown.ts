import type { Encoder } from '@xstd/codec';
import { encodeZCLDataTypeData8 } from '../0x08--data8/encode-z-c-l-data-type-data8.ts';
import { encodeZCLDataTypeData16 } from '../0x09--data16/encode-z-c-l-data-type-data16.ts';
import { encodeZCLDataTypeData24 } from '../0x0a--data24/encode-z-c-l-data-type-data24.ts';
import { encodeZCLDataTypeData32 } from '../0x0b--data32/encode-z-c-l-data-type-data32.ts';
import { encodeZCLDataTypeData40 } from '../0x0c--data40/encode-z-c-l-data-type-data40.ts';
import { encodeZCLDataTypeData48 } from '../0x0d--data48/encode-z-c-l-data-type-data48.ts';
import { encodeZCLDataTypeData56 } from '../0x0d--data56/encode-z-c-l-data-type-data56.ts';
import { encodeZCLDataTypeData64 } from '../0x0f--data64/encode-z-c-l-data-type-data64.ts';
import { encodeZCLDataTypeBoolean } from '../0x10--boolean/encode-z-c-l-data-type-boolean.ts';
import { encodeZCLDataTypeMap8 } from '../0x18--map8/encode-z-c-l-data-type-map8.ts';
import { encodeZCLDataTypeMap16 } from '../0x19--map16/encode-z-c-l-data-type-map16.ts';
import { encodeZCLDataTypeMap24 } from '../0x1a--map24/encode-z-c-l-data-type-map24.ts';
import { encodeZCLDataTypeMap32 } from '../0x1b--map32/encode-z-c-l-data-type-map32.ts';
import { encodeZCLDataTypeMap40 } from '../0x1c--map40/encode-z-c-l-data-type-map40.ts';
import { encodeZCLDataTypeMap48 } from '../0x1d--map48/encode-z-c-l-data-type-map48.ts';
import { encodeZCLDataTypeMap56 } from '../0x1e--map56/encode-z-c-l-data-type-map56.ts';
import { encodeZCLDataTypeMap64 } from '../0x1f--map64/encode-z-c-l-data-type-map64.ts';
import { encodeZCLDataTypeUint8 } from '../0x20--uint8/encode-z-c-l-data-type-uint8.ts';
import { encodeZCLDataTypeUint16 } from '../0x21--uint16/encode-z-c-l-data-type-uint16.ts';
import { encodeZCLDataTypeUint24 } from '../0x22--uint24/encode-z-c-l-data-type-uint24.ts';
import { encodeZCLDataTypeUint32 } from '../0x23--uint32/encode-z-c-l-data-type-uint32.ts';
import { encodeZCLDataTypeUint40 } from '../0x24--uint40/encode-z-c-l-data-type-uint40.ts';
import { encodeZCLDataTypeUint48 } from '../0x25--uint48/encode-z-c-l-data-type-uint48.ts';
import { encodeZCLDataTypeUint56 } from '../0x26--uint56/encode-z-c-l-data-type-uint56.ts';
import { encodeZCLDataTypeUint64 } from '../0x27--uint64/encode-z-c-l-data-type-uint64.ts';
import { encodeZCLDataTypeInt8 } from '../0x28--int8/encode-z-c-l-data-type-int8.ts';
import { encodeZCLDataTypeInt16 } from '../0x29--int16/encode-z-c-l-data-type-int16.ts';
import { encodeZCLDataTypeInt24 } from '../0x2a--int24/encode-z-c-l-data-type-int24.ts';
import { encodeZCLDataTypeInt32 } from '../0x2b--int32/encode-z-c-l-data-type-int32.ts';
import { encodeZCLDataTypeInt40 } from '../0x2c--int40/encode-z-c-l-data-type-int40.ts';
import { encodeZCLDataTypeInt48 } from '../0x2d--int48/encode-z-c-l-data-type-int48.ts';
import { encodeZCLDataTypeInt56 } from '../0x2e--int56/encode-z-c-l-data-type-int56.ts';
import { encodeZCLDataTypeInt64 } from '../0x2f--int64/encode-z-c-l-data-type-int64.ts';
import { encodeZCLDataTypeEnum8 } from '../0x30--enum8/encode-z-c-l-data-type-enum8.ts';
import { encodeZCLDataTypeEnum16 } from '../0x31--enum16/encode-z-c-l-data-type-enum16.ts';
import { encodeZCLDataTypeFloat16 } from '../0x38--float16/encode-z-c-l-data-type-float16.ts';
import { encodeZCLDataTypeFloat32 } from '../0x39--float32/encode-z-c-l-data-type-float32.ts';
import { encodeZCLDataTypeFloat64 } from '../0x3a--float64/encode-z-c-l-data-type-float64.ts';
import { encodeZCLDataTypeString } from '../0x42--string/encode-z-c-l-data-type-string.ts';
import { encodeZCLDataTypeArray } from '../0x48--array/encode-z-c-l-data-type-array.ts';
import type { ZCLDataTypeArray } from '../0x48--array/z-c-l-data-type-array.ts';

export function encodeZCLDataTypeUnknown(encoder: Encoder, dataType: number, value: unknown): void {
  switch (dataType) {
    case 0x08:
      encodeZCLDataTypeData8(encoder, value as number);
      break;
    case 0x09:
      encodeZCLDataTypeData16(encoder, value as number);
      break;
    case 0x0a:
      encodeZCLDataTypeData24(encoder, value as number);
      break;
    case 0x0b:
      encodeZCLDataTypeData32(encoder, value as number);
      break;
    case 0x0c:
      encodeZCLDataTypeData40(encoder, value as number);
      break;
    case 0x0d:
      encodeZCLDataTypeData48(encoder, value as number);
      break;
    case 0x0e:
      encodeZCLDataTypeData56(encoder, value as bigint | number);
      break;
    case 0x0f:
      encodeZCLDataTypeData64(encoder, value as bigint | number);
      break;
    case 0x10:
      encodeZCLDataTypeBoolean(encoder, value as boolean);
      break;
    case 0x18:
      encodeZCLDataTypeMap8(encoder, value as number);
      break;
    case 0x19:
      encodeZCLDataTypeMap16(encoder, value as number);
      break;
    case 0x1a:
      encodeZCLDataTypeMap24(encoder, value as number);
      break;
    case 0x1b:
      encodeZCLDataTypeMap32(encoder, value as number);
      break;
    case 0x1c:
      encodeZCLDataTypeMap40(encoder, value as number);
      break;
    case 0x1d:
      encodeZCLDataTypeMap48(encoder, value as number);
      break;
    case 0x1e:
      encodeZCLDataTypeMap56(encoder, value as number);
      break;
    case 0x1f:
      encodeZCLDataTypeMap64(encoder, value as number);
      break;
    case 0x20:
      encodeZCLDataTypeUint8(encoder, value as number);
      break;
    case 0x21:
      encodeZCLDataTypeUint16(encoder, value as number);
      break;
    case 0x22:
      encodeZCLDataTypeUint24(encoder, value as number);
      break;
    case 0x23:
      encodeZCLDataTypeUint32(encoder, value as number);
      break;
    case 0x24:
      encodeZCLDataTypeUint40(encoder, value as number);
      break;
    case 0x25:
      encodeZCLDataTypeUint48(encoder, value as number);
      break;
    case 0x26:
      encodeZCLDataTypeUint56(encoder, value as number);
      break;
    case 0x27:
      encodeZCLDataTypeUint64(encoder, value as bigint | number);
      break;
    case 0x28:
      encodeZCLDataTypeInt8(encoder, value as number);
      break;
    case 0x29:
      encodeZCLDataTypeInt16(encoder, value as number);
      break;
    case 0x2a:
      encodeZCLDataTypeInt24(encoder, value as number);
      break;
    case 0x2b:
      encodeZCLDataTypeInt32(encoder, value as number);
      break;
    case 0x2c:
      encodeZCLDataTypeInt40(encoder, value as number);
      break;
    case 0x2d:
      encodeZCLDataTypeInt48(encoder, value as number);
      break;
    case 0x2e:
      encodeZCLDataTypeInt56(encoder, value as bigint);
      break;
    case 0x2f:
      encodeZCLDataTypeInt64(encoder, value as bigint | number);
      break;
    case 0x30:
      encodeZCLDataTypeEnum8(encoder, value as number);
      break;
    case 0x31:
      encodeZCLDataTypeEnum16(encoder, value as number);
      break;
    case 0x38:
      encodeZCLDataTypeFloat16(encoder, value as number);
      break;
    case 0x39:
      encodeZCLDataTypeFloat32(encoder, value as number);
      break;
    case 0x3a:
      encodeZCLDataTypeFloat64(encoder, value as number);
      break;
    // TODO 0x41 (octstr)
    case 0x42:
      encodeZCLDataTypeString(encoder, value as string);
      break;
    // TODO others
    case 0x48:
      encodeZCLDataTypeArray(encoder, value as ZCLDataTypeArray);
      break;
    // TODO others
    default:
      throw new Error(`Unsupported data type: 0x${dataType.toString(16).padStart(2, '0')}.`);
  }
}
