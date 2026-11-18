import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { IlluminanceMeasurementClusterZCLClusterAttribute } from '../../attribute/illuminance-measurement-cluster-z-c-l-cluster-attribute.ts';
import { ILLUMINANCE_MEASURED_VALUE_ZCL_ATTRIBUTE_MAPPER } from '../0x0000-illuminance-measured-value/z-c-l-illuminance-measured-value-attribute.ts';

/**
 * @type {number}
 * @unit: lx (Lux)
 *
 * The special values 0x0000 and 0xffff pass through unchanged (undefined measured range).
 */
export class ZCLIlluminanceMaxMeasuredValueAttribute extends IlluminanceMeasurementClusterZCLClusterAttribute<number> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0002, ILLUMINANCE_MEASURED_VALUE_ZCL_ATTRIBUTE_MAPPER);
  }
}
