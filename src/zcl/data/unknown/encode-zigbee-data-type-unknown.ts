import { type Encoder } from '@xstd/codec';
import { encodeZigbeeDataTypeData8 } from '../0x08--data8/encode-zigbee-data-type-data8.js';
import { encodeZigbeeDataTypeData16 } from '../0x09--data16/encode-zigbee-data-type-data16.js';
import { encodeZigbeeDataTypeData24 } from '../0x0a--data24/encode-zigbee-data-type-data24.js';
import { encodeZigbeeDataTypeData32 } from '../0x0b--data32/encode-zigbee-data-type-data32.js';
import { encodeZigbeeDataTypeData40 } from '../0x0c--data40/encode-zigbee-data-type-data40.js';
import { encodeZigbeeDataTypeData48 } from '../0x0d--data48/encode-zigbee-data-type-data48.js';
import { encodeZigbeeDataTypeData56 } from '../0x0d--data56/encode-zigbee-data-type-data56.js';
import { encodeZigbeeDataTypeData64 } from '../0x0f--data64/encode-zigbee-data-type-data64.js';
import { encodeZigbeeDataTypeBoolean } from '../0x10--boolean/encode-zigbee-data-type-boolean.js';
import { encodeZigbeeDataTypeMap8 } from '../0x18--map8/encode-zigbee-data-type-map8.js';
import { encodeZigbeeDataTypeMap16 } from '../0x19--map16/encode-zigbee-data-type-map16.js';
import { encodeZigbeeDataTypeMap24 } from '../0x1a--map24/encode-zigbee-data-type-map24.js';
import { encodeZigbeeDataTypeMap32 } from '../0x1b--map32/encode-zigbee-data-type-map32.js';
import { encodeZigbeeDataTypeMap40 } from '../0x1c--map40/encode-zigbee-data-type-map40.js';
import { encodeZigbeeDataTypeMap48 } from '../0x1d--map48/encode-zigbee-data-type-map48.js';
import { encodeZigbeeDataTypeMap56 } from '../0x1e--map56/encode-zigbee-data-type-map56.js';
import { encodeZigbeeDataTypeMap64 } from '../0x1f--map64/encode-zigbee-data-type-map64.js';
import { encodeZigbeeDataTypeUint8 } from '../0x20--uint8/encode-zigbee-data-type-uint8.js';
import { encodeZigbeeDataTypeUint16 } from '../0x21--uint16/encode-zigbee-data-type-uint16.js';
import { encodeZigbeeDataTypeUint24 } from '../0x22--uint24/encode-zigbee-data-type-uint24.js';
import { encodeZigbeeDataTypeUint32 } from '../0x23--uint32/encode-zigbee-data-type-uint32.js';
import { encodeZigbeeDataTypeUint40 } from '../0x24--uint40/encode-zigbee-data-type-uint40.js';
import { encodeZigbeeDataTypeUint48 } from '../0x25--uint48/encode-zigbee-data-type-uint48.js';
import { encodeZigbeeDataTypeUint56 } from '../0x26--uint56/encode-zigbee-data-type-uint56.js';
import { encodeZigbeeDataTypeUint64 } from '../0x27--uint64/encode-zigbee-data-type-uint64.js';
import { encodeZigbeeDataTypeInt8 } from '../0x28--int8/encode-zigbee-data-type-int8.js';
import { encodeZigbeeDataTypeInt16 } from '../0x29--int16/encode-zigbee-data-type-int16.js';
import { encodeZigbeeDataTypeInt24 } from '../0x2a--int24/encode-zigbee-data-type-int24.js';
import { encodeZigbeeDataTypeInt32 } from '../0x2b--int32/encode-zigbee-data-type-int32.js';
import { encodeZigbeeDataTypeInt40 } from '../0x2c--int40/encode-zigbee-data-type-int40.js';
import { encodeZigbeeDataTypeInt48 } from '../0x2d--int48/encode-zigbee-data-type-int48.js';
import { encodeZigbeeDataTypeInt56 } from '../0x2e--int56/encode-zigbee-data-type-int56.js';
import { encodeZigbeeDataTypeInt64 } from '../0x2f--int64/encode-zigbee-data-type-int64.js';
import { encodeZigbeeDataTypeEnum8 } from '../0x30--enum8/encode-zigbee-data-type-enum8.js';
import { encodeZigbeeDataTypeEnum16 } from '../0x31--enum16/encode-zigbee-data-type-enum16.js';
import { encodeZigbeeDataTypeFloat16 } from '../0x38--float16/encode-zigbee-data-type-float16.js';
import { encodeZigbeeDataTypeFloat32 } from '../0x39--float32/encode-zigbee-data-type-float32.js';
import { encodeZigbeeDataTypeFloat64 } from '../0x3a--float64/encode-zigbee-data-type-float64.js';
import { encodeZigbeeDataTypeString } from '../0x42--string/encode-zigbee-data-type-string.js';

export function encodeZigbeeDataTypeUnknown(
  encoder: Encoder,
  dataType: number,
  value: unknown,
): void {
  switch (dataType) {
    case 0x08:
      encodeZigbeeDataTypeData8(encoder, value as number);
      break;
    case 0x09:
      encodeZigbeeDataTypeData16(encoder, value as number);
      break;
    case 0x0a:
      encodeZigbeeDataTypeData24(encoder, value as number);
      break;
    case 0x0b:
      encodeZigbeeDataTypeData32(encoder, value as number);
      break;
    case 0x0c:
      encodeZigbeeDataTypeData40(encoder, value as number);
      break;
    case 0x0d:
      encodeZigbeeDataTypeData48(encoder, value as number);
      break;
    case 0x0e:
      encodeZigbeeDataTypeData56(encoder, value as bigint | number);
      break;
    case 0x0f:
      encodeZigbeeDataTypeData64(encoder, value as bigint | number);
      break;
    case 0x10:
      encodeZigbeeDataTypeBoolean(encoder, value as boolean);
      break;
    case 0x18:
      encodeZigbeeDataTypeMap8(encoder, value as number);
      break;
    case 0x19:
      encodeZigbeeDataTypeMap16(encoder, value as number);
      break;
    case 0x1a:
      encodeZigbeeDataTypeMap24(encoder, value as number);
      break;
    case 0x1b:
      encodeZigbeeDataTypeMap32(encoder, value as number);
      break;
    case 0x1c:
      encodeZigbeeDataTypeMap40(encoder, value as number);
      break;
    case 0x1d:
      encodeZigbeeDataTypeMap48(encoder, value as number);
      break;
    case 0x1e:
      encodeZigbeeDataTypeMap56(encoder, value as number);
      break;
    case 0x1f:
      encodeZigbeeDataTypeMap64(encoder, value as number);
      break;
    case 0x20:
      encodeZigbeeDataTypeUint8(encoder, value as number);
      break;
    case 0x21:
      encodeZigbeeDataTypeUint16(encoder, value as number);
      break;
    case 0x22:
      encodeZigbeeDataTypeUint24(encoder, value as number);
      break;
    case 0x23:
      encodeZigbeeDataTypeUint32(encoder, value as number);
      break;
    case 0x24:
      encodeZigbeeDataTypeUint40(encoder, value as number);
      break;
    case 0x25:
      encodeZigbeeDataTypeUint48(encoder, value as number);
      break;
    case 0x26:
      encodeZigbeeDataTypeUint56(encoder, value as number);
      break;
    case 0x27:
      encodeZigbeeDataTypeUint64(encoder, value as bigint | number);
      break;
    case 0x28:
      encodeZigbeeDataTypeInt8(encoder, value as number);
      break;
    case 0x29:
      encodeZigbeeDataTypeInt16(encoder, value as number);
      break;
    case 0x2a:
      encodeZigbeeDataTypeInt24(encoder, value as number);
      break;
    case 0x2b:
      encodeZigbeeDataTypeInt32(encoder, value as number);
      break;
    case 0x2c:
      encodeZigbeeDataTypeInt40(encoder, value as number);
      break;
    case 0x2d:
      encodeZigbeeDataTypeInt48(encoder, value as number);
      break;
    case 0x2e:
      encodeZigbeeDataTypeInt56(encoder, value as bigint);
      break;
    case 0x2f:
      encodeZigbeeDataTypeInt64(encoder, value as bigint | number);
      break;
    case 0x30:
      encodeZigbeeDataTypeEnum8(encoder, value as number);
      break;
    case 0x31:
      encodeZigbeeDataTypeEnum16(encoder, value as number);
      break;
    case 0x38:
      encodeZigbeeDataTypeFloat16(encoder, value as number);
      break;
    case 0x39:
      encodeZigbeeDataTypeFloat32(encoder, value as number);
      break;
    case 0x3a:
      encodeZigbeeDataTypeFloat64(encoder, value as number);
      break;
    // TODO 0x41 (octstr)
    case 0x42:
      encodeZigbeeDataTypeString(encoder, value as string);
      break;
    // TODO others
    default:
      throw new Error(`Unsupported data type: 0x${dataType.toString(16).padStart(2, '0')}.`);
  }
}
