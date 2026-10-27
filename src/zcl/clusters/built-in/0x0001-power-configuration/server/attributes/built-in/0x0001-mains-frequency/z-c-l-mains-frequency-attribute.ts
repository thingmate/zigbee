import { NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { PowerConfigurationZCLClusterAttribute } from '../../attribute/power-configuration-z-c-l-cluster-attribute.ts';

/**
 * Unit: Hz
 */
export class ZCLMainsFrequencyAttribute extends PowerConfigurationZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0001, NUMBER_ZCL_ATTRIBUTE_MAPPER);
  }
}
