import { MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { PowerConfigurationClusterZCLClusterAttribute } from '../../attribute/power-configuration-cluster-z-c-l-cluster-attribute.ts';

/**
 * Unit: V
 *
 * Wire value: 0-25.5 V in 0.1 V steps; 0xff: unknown value.
 */
export class ZCLBatteryVoltageAttribute extends PowerConfigurationClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0020, BATTERY_VOLTAGE_ZCL_ATTRIBUTE_MAPPER);
  }
}

const BATTERY_VOLTAGE_ZCL_ATTRIBUTE_MAPPER: ZCLAttributeMapper<number> = {
  inOut: MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut,
  outIn: (value: unknown): number => {
    if (value === 0xff) {
      throw new Error('Invalid battery voltage wire value: 0xff.');
    }
    return MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(value);
  },
};
