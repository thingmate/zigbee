import { enumZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/built-in/enum/enum-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { BasicClusterZCLClusterAttribute } from '../../attribute/basic-cluster-z-c-l-cluster-attribute.ts';

/**
 * @type {ZCLPowerSource}
 */
export class ZCLPowerSourceAttribute extends BasicClusterZCLClusterAttribute<ZCLPowerSource> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0007, POWER_SOURCE_ZCL_ATTRIBUTE_MAPPER);
  }
}

export type ZCLPowerSource =
  | 'unknown'
  | 'mains-single-phase'
  | 'mains-triple-phase'
  | 'battery'
  | 'dc-source'
  | 'emergency-mains-constantly-powered'
  | 'emergency-mains-and-transfer-switch';

const POWER_SOURCE_ZCL_ATTRIBUTE_MAPPER = enumZCLAttributeMapper<ZCLPowerSource>([
  [0x00, 'unknown'],
  [0x01, 'mains-single-phase'],
  [0x02, 'mains-triple-phase'],
  [0x03, 'battery'],
  [0x04, 'dc-source'],
  [0x05, 'emergency-mains-constantly-powered'],
  [0x06, 'emergency-mains-and-transfer-switch'],
]);
