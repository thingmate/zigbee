import { enumZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/built-in/enum/enum-z-c-l-attribute-mapper.ts';
import { NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { IlluminanceMesurementClusterZCLClusterAttribute } from '../../attribute/illuminance-mesurement-cluster-z-c-l-cluster-attribute.ts';

/**
 * @type {ZCLLightSensorType}
 */
export class ZCLIlluminanceLightSensorTypeAttribute extends IlluminanceMesurementClusterZCLClusterAttribute<ZCLLightSensorType> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0004, LIGHT_SENSOR_TYPE_ZCL_ATTRIBUTE_MAPPER);
  }
}

export type ZCLLightSensorType =
  | 'photodiode'
  | 'cmos'
  | number // [0x40 - 0xfe] -> unknown
  | 'unknown';

const LIGHT_SENSOR_TYPE_ENUM_ZCL_ATTRIBUTE_MAPPER = enumZCLAttributeMapper<
  Exclude<ZCLLightSensorType, number>
>([
  [0x00, 'photodiode'],
  [0x01, 'cmos'],
  [0xff, 'unknown'],
]);

const LIGHT_SENSOR_TYPE_ZCL_ATTRIBUTE_MAPPER: ZCLAttributeMapper<ZCLLightSensorType> =
  Object.freeze({
    inOut: (value: ZCLLightSensorType): unknown => {
      if (typeof value === 'number') {
        if (0x40 <= value && value <= 0xfe) {
          return NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut(value);
        } else {
          throw new Error(`Invalid value for ZCLLightSensorType: ${value}`);
        }
      } else {
        return LIGHT_SENSOR_TYPE_ENUM_ZCL_ATTRIBUTE_MAPPER.inOut(value);
      }
    },
    outIn: (value: unknown): ZCLLightSensorType => {
      if (typeof value === 'number') {
        if (0x40 <= value && value <= 0xfe) {
          return NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(value);
        } else {
          throw new Error(`Invalid value for ZCLLightSensorType: ${value}`);
        }
      } else {
        return LIGHT_SENSOR_TYPE_ENUM_ZCL_ATTRIBUTE_MAPPER.outIn(value);
      }
    },
  } satisfies ZCLAttributeMapper<ZCLLightSensorType>);
