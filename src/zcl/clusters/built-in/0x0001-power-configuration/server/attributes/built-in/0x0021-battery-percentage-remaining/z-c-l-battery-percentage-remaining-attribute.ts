import { MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { PowerConfigurationClusterZCLClusterAttribute } from '../../attribute/power-configuration-cluster-z-c-l-cluster-attribute.ts';

/**
 * Unitless: fraction [0, 1].
 *
 * Wire value: 0-200 (0-100% in 0.5% steps); 0xff: invalid value.
 */
export class ZCLBatteryPercentageRemainingAttribute extends PowerConfigurationClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0021, BATTERY_PERCENTAGE_REMAINING_ZCL_ATTRIBUTE_MAPPER);
  }
}

const BATTERY_PERCENTAGE_REMAINING_ZCL_ATTRIBUTE_MAPPER: ZCLAttributeMapper<number> = {
  inOut: MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut,
  outIn: (value: unknown): number => {
    if (value === 0xff) {
      throw new Error('Invalid battery percentage remaining wire value: 0xff.');
    }
    return MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(value);
  },
};
