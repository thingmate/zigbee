import { MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { PowerConfigurationClusterZCLClusterAttribute } from '../../attribute/power-configuration-cluster-z-c-l-cluster-attribute.ts';

/**
 * Unit: V
 */
export class ZCLMainsVoltageAttribute extends PowerConfigurationClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, MAINS_VOLTAGE_ZCL_ATTRIBUTE_MAPPER);
  }
}

const MAINS_VOLTAGE_ZCL_ATTRIBUTE_MAPPER: ZCLAttributeMapper<number> = {
  inOut: MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER.inOut,
  outIn: (value: unknown): number => {
    if (value === 0xffff) {
      throw new Error('Invalid mains voltage wire value: 0xffff.');
    }
    return MUL_10_NUMBER_ZCL_ATTRIBUTE_MAPPER.outIn(value);
  },
};
