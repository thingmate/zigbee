import { type Decoder } from '@xstd/codec';
import { decodeZigbeeDataTypeData8 } from '../0x08--data8/decode-zigbee-data-type-data8.js';
import { decodeZigbeeDataTypeData16 } from '../0x09--data16/decode-zigbee-data-type-data16.js';
import { decodeZigbeeDataTypeData24 } from '../0x0a--data24/decode-zigbee-data-type-data24.js';
import { decodeZigbeeDataTypeData32 } from '../0x0b--data32/decode-zigbee-data-type-data32.js';
import { decodeZigbeeDataTypeData40 } from '../0x0c--data40/decode-zigbee-data-type-data40.js';
import { decodeZigbeeDataTypeData48 } from '../0x0d--data48/decode-zigbee-data-type-data48.js';
import { decodeZigbeeDataTypeData56 } from '../0x0d--data56/decode-zigbee-data-type-data56.js';
import { decodeZigbeeDataTypeData64 } from '../0x0f--data64/decode-zigbee-data-type-data64.js';
import { decodeZigbeeDataTypeBoolean } from '../0x10--boolean/decode-zigbee-data-type-boolean.js';
import { decodeZigbeeDataTypeMap8 } from '../0x18--map8/decode-zigbee-data-type-map8.js';
import { decodeZigbeeDataTypeMap16 } from '../0x19--map16/decode-zigbee-data-type-map16.js';
import { decodeZigbeeDataTypeMap24 } from '../0x1a--map24/decode-zigbee-data-type-map24.js';
import { decodeZigbeeDataTypeMap32 } from '../0x1b--map32/decode-zigbee-data-type-map32.js';
import { decodeZigbeeDataTypeMap40 } from '../0x1c--map40/decode-zigbee-data-type-map40.js';
import { decodeZigbeeDataTypeMap48 } from '../0x1d--map48/decode-zigbee-data-type-map48.js';
import { decodeZigbeeDataTypeMap56 } from '../0x1e--map56/decode-zigbee-data-type-map56.js';
import { decodeZigbeeDataTypeMap64 } from '../0x1f--map64/decode-zigbee-data-type-map64.js';
import { decodeZigbeeDataTypeUint8 } from '../0x20--uint8/decode-zigbee-data-type-uint8.js';
import { decodeZigbeeDataTypeUint16 } from '../0x21--uint16/decode-zigbee-data-type-uint16.js';
import { decodeZigbeeDataTypeUint24 } from '../0x22--uint24/decode-zigbee-data-type-uint24.js';
import { decodeZigbeeDataTypeUint32 } from '../0x23--uint32/decode-zigbee-data-type-uint32.js';
import { decodeZigbeeDataTypeUint40 } from '../0x24--uint40/decode-zigbee-data-type-uint40.js';
import { decodeZigbeeDataTypeUint48 } from '../0x25--uint48/decode-zigbee-data-type-uint48.js';
import { decodeZigbeeDataTypeUint56 } from '../0x26--uint56/decode-zigbee-data-type-uint56.js';
import { decodeZigbeeDataTypeUint64 } from '../0x27--uint64/decode-zigbee-data-type-uint64.js';
import { decodeZigbeeDataTypeInt8 } from '../0x28--int8/decode-zigbee-data-type-int8.js';
import { decodeZigbeeDataTypeInt16 } from '../0x29--int16/decode-zigbee-data-type-int16.js';
import { decodeZigbeeDataTypeInt24 } from '../0x2a--int24/decode-zigbee-data-type-int24.js';
import { decodeZigbeeDataTypeInt32 } from '../0x2b--int32/decode-zigbee-data-type-int32.js';
import { decodeZigbeeDataTypeInt40 } from '../0x2c--int40/decode-zigbee-data-type-int40.js';
import { decodeZigbeeDataTypeInt48 } from '../0x2d--int48/decode-zigbee-data-type-int48.js';
import { decodeZigbeeDataTypeInt56 } from '../0x2e--int56/decode-zigbee-data-type-int56.js';
import { decodeZigbeeDataTypeInt64 } from '../0x2f--int64/decode-zigbee-data-type-int64.js';
import { decodeZigbeeDataTypeEnum8 } from '../0x30--enum8/decode-zigbee-data-type-enum8.js';
import { decodeZigbeeDataTypeEnum16 } from '../0x31--enum16/decode-zigbee-data-type-enum16.js';
import { decodeZigbeeDataTypeFloat16 } from '../0x38--float16/decode-zigbee-data-type-float16.js';
import { decodeZigbeeDataTypeFloat32 } from '../0x39--float32/decode-zigbee-data-type-float32.js';
import { decodeZigbeeDataTypeFloat64 } from '../0x3a--float64/decode-zigbee-data-type-float64.js';
import { decodeZigbeeDataTypeString } from '../0x42--string/decode-zigbee-data-type-string.js';
import { decodeZigbeeDataTypeArray } from '../0x48--array/decode-zigbee-data-type-array.js';

export function decodeZigbeeDataTypeUnknown(decoder: Decoder, dataType: number): unknown {
  switch (dataType) {
    case 0x08:
      return decodeZigbeeDataTypeData8(decoder);
    case 0x09:
      return decodeZigbeeDataTypeData16(decoder);
    case 0x0a:
      return decodeZigbeeDataTypeData24(decoder);
    case 0x0b:
      return decodeZigbeeDataTypeData32(decoder);
    case 0x0c:
      return decodeZigbeeDataTypeData40(decoder);
    case 0x0d:
      return decodeZigbeeDataTypeData48(decoder);
    case 0x0e:
      return decodeZigbeeDataTypeData56(decoder);
    case 0x0f:
      return decodeZigbeeDataTypeData64(decoder);
    case 0x10:
      return decodeZigbeeDataTypeBoolean(decoder);
    case 0x18:
      return decodeZigbeeDataTypeMap8(decoder);
    case 0x19:
      return decodeZigbeeDataTypeMap16(decoder);
    case 0x1a:
      return decodeZigbeeDataTypeMap24(decoder);
    case 0x1b:
      return decodeZigbeeDataTypeMap32(decoder);
    case 0x1c:
      return decodeZigbeeDataTypeMap40(decoder);
    case 0x1d:
      return decodeZigbeeDataTypeMap48(decoder);
    case 0x1e:
      return decodeZigbeeDataTypeMap56(decoder);
    case 0x1f:
      return decodeZigbeeDataTypeMap64(decoder);
    case 0x20:
      return decodeZigbeeDataTypeUint8(decoder);
    case 0x21:
      return decodeZigbeeDataTypeUint16(decoder);
    case 0x22:
      return decodeZigbeeDataTypeUint24(decoder);
    case 0x23:
      return decodeZigbeeDataTypeUint32(decoder);
    case 0x24:
      return decodeZigbeeDataTypeUint40(decoder);
    case 0x25:
      return decodeZigbeeDataTypeUint48(decoder);
    case 0x26:
      return decodeZigbeeDataTypeUint56(decoder);
    case 0x27:
      return decodeZigbeeDataTypeUint64(decoder);
    case 0x28:
      return decodeZigbeeDataTypeInt8(decoder);
    case 0x29:
      return decodeZigbeeDataTypeInt16(decoder);
    case 0x2a:
      return decodeZigbeeDataTypeInt24(decoder);
    case 0x2b:
      return decodeZigbeeDataTypeInt32(decoder);
    case 0x2c:
      return decodeZigbeeDataTypeInt40(decoder);
    case 0x2d:
      return decodeZigbeeDataTypeInt48(decoder);
    case 0x2e:
      return decodeZigbeeDataTypeInt56(decoder);
    case 0x2f:
      return decodeZigbeeDataTypeInt64(decoder);
    case 0x30:
      return decodeZigbeeDataTypeEnum8(decoder);
    case 0x31:
      return decodeZigbeeDataTypeEnum16(decoder);
    case 0x38:
      return decodeZigbeeDataTypeFloat16(decoder);
    case 0x39:
      return decodeZigbeeDataTypeFloat32(decoder);
    case 0x3a:
      return decodeZigbeeDataTypeFloat64(decoder);
    case 0x41:
      // TODO 0x41 (octstr)
      throw new Error('Missing implementation of octstr.');
    case 0x42:
      return decodeZigbeeDataTypeString(decoder);
    case 0x43:
      // TODO 0x43 (octstr16)
      throw new Error('Missing implementation of octstr16.');
    case 0x44:
      // TODO 0x44 (string16)
      throw new Error('Missing implementation of string16.');
    case 0x48:
      return decodeZigbeeDataTypeArray(decoder);
    // TODO 0x4c (struct)
    // TODO others
    default:
      throw new Error(`Unsupported data type: 0x${dataType.toString(16).padStart(2, '0')}.`);
  }
}
