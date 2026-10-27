import {
  NUMBER_ZCL_ATTRIBUTE_MAPPER,
  type NumberZCLAttributeMapper,
} from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { IlluminanceMesurementClusterZCLClusterAttribute } from '../../attribute/illuminance-mesurement-cluster-z-c-l-cluster-attribute.ts';

/**
 * @type {number}
 * @unit: lx (Lux)
 *
 * The special values 0x0000 (too low to measure) and 0xffff (invalid value) pass through unchanged.
 */
export class ZCLIlluminanceMeasuredValueAttribute extends IlluminanceMesurementClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, ILLUMINANCE_MEASURED_VALUE_ZCL_ATTRIBUTE_MAPPER);
  }
}

/*---*/

export const ILLUMINANCE_MEASURED_VALUE_ZCL_ATTRIBUTE_MAPPER: NumberZCLAttributeMapper =
  Object.freeze({
    inOut: (value: number): unknown => {
      if (value === 0x0000 || value === 0xffff) {
        return NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut(value);
      } else {
        return NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut(1e4 * Math.log10(value) + 1);
      }
    },
    outIn: (value: unknown): number => {
      const illuminance: number = NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(value);
      if (illuminance === 0x0000 || illuminance === 0xffff) {
        return illuminance;
      } else {
        return Math.pow(10, (illuminance - 1) / 1e4);
      }
    },
  } satisfies NumberZCLAttributeMapper);
