import { MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { RelativeHumidityMesurementClusterZCLClusterAttribute } from '../../attribute/relative-humidity-mesurement-cluster-z-c-l-cluster-attribute.ts';

/**
 * Unitless: fraction [0, 1].
 *
 * Wire value: 0-10000 (0-100% in 0.01% steps); 0xffff: invalid value.
 */
export class ZCLRelativeHumidityMeasuredValueAttribute extends RelativeHumidityMesurementClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0000, MUL_10000_NUMBER_ZCL_ATTRIBUTE_MAPPER);
  }
}
