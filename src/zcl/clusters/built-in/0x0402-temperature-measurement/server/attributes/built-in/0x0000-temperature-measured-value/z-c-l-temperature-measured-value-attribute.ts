import { MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { TemperatureMeasurementClusterZCLClusterAttribute } from '../../attribute/temperature-measurement-cluster-z-c-l-cluster-attribute.ts';

/**
 * Unit: °C
 *
 * Wire value: int16 in 0.01 °C steps; 0x8000: invalid value.
 */
export class ZCLTemperatureMeasuredValueAttribute extends TemperatureMeasurementClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, TEMPERATURE_MEASURED_VALUE_ZCL_ATTRIBUTE_MAPPER);
  }
}

const TEMPERATURE_MEASURED_VALUE_ZCL_ATTRIBUTE_MAPPER: ZCLAttributeMapper<number> = {
  inOut: MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut,
  outIn: (value: unknown): number => {
    if (value === 0x8000) {
      throw new Error('Invalid temperature measured value wire value: 0x8000.');
    }
    return MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(value);
  },
};
