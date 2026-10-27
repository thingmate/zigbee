import { MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { TemperatureMesurementClusterZCLClusterAttribute } from '../../attribute/temperature-mesurement-cluster-z-c-l-cluster-attribute.ts';

/**
 * Unit: °C
 */
export class ZCLTemperatureMeasuredValueAttribute extends TemperatureMesurementClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, MUL_100_NUMBER_ZCL_ATTRIBUTE_MAPPER);
  }
}
