import { MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { RelativeHumidityMeasurementClusterZCLClusterAttribute } from '../../attribute/relative-humidity-measurement-cluster-z-c-l-cluster-attribute.ts';

/**
 * Unitless: fraction [0, 1].
 *
 * Wire value: 0-10000 (0-100% in 0.01% steps); 0xffff: invalid value.
 */
export class ZCLRelativeHumidityMeasuredValueAttribute extends RelativeHumidityMeasurementClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, RELATIVE_HUMIDITY_MEASURED_VALUE_ZCL_ATTRIBUTE_MAPPER);
  }
}

const RELATIVE_HUMIDITY_MEASURED_VALUE_ZCL_ATTRIBUTE_MAPPER: ZCLAttributeMapper<number> = {
  inOut: MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut,
  outIn: (value: unknown): number => {
    if (value === 0xffff) {
      throw new Error('Invalid relative humidity measured value wire value: 0xffff.');
    }
    return MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(value);
  },
};
