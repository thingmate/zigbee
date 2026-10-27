import { NUMBER_ZCL_ATTRIBUTE_MAPPER } from '../../../../../../primitives/attribute/mapper/built-in/number/number-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { IlluminanceMesurementClusterZCLClusterAttribute } from '../../attribute/illuminance-mesurement-cluster-z-c-l-cluster-attribute.ts';

/**
 * @type {number}
 * @unit: lx (Lux)
 */
export class ZCLIlluminanceToleranceAttribute extends IlluminanceMesurementClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0003, NUMBER_ZCL_ATTRIBUTE_MAPPER);
  }
}
