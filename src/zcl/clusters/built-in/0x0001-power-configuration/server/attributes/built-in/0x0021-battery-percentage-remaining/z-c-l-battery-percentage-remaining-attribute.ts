import { MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { PowerConfigurationZCLClusterAttribute } from '../../attribute/power-configuration-z-c-l-cluster-attribute.ts';

/**
 * Unitless: fraction [0, 1].
 *
 * Wire value: 0-200 (0-100% in 0.5% steps); 0xff: invalid value.
 */
export class ZCLBatteryPercentageRemainingAttribute extends PowerConfigurationZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0021, MUL_200_NUMBER_ZCL_ATTRIBUTE_MAPPER);
  }
}
