import { enumZCLAttributeMapper } from '../../../../../../primitives/attribute/mapper/built-in/enum/enum-z-c-l-attribute-mapper.ts';
import type { ZCLClusterAttributeStream } from '../../../../../../primitives/attribute/z-c-l-cluster-attribute.ts';
import { IASZoneClusterZCLClusterAttribute } from '../../attribute/i-a-s-zone-cluster-z-c-l-cluster-attribute.ts';

/**
 * @type {ZCLIASZoneType}
 */
export class ZCLIASZoneTypeAttribute extends IASZoneClusterZCLClusterAttribute<ZCLIASZoneType> {
  constructor(stream: ZCLClusterAttributeStream) {
    super(stream, 0x0001, IAS_ZONE_STATE_ZCL_ATTRIBUTE_MAPPER);
  }
}

export type ZCLIASZoneType =
  | 'standard-cie'
  | 'motion-sensor'
  | 'contact-switch'
  | 'door-window-handle'
  | 'fire-sensor'
  | 'water-sensor'
  | 'carbon-monoxide-sensor'
  | 'personal-emergency-device'
  | 'vibration-movement-sensor'
  | 'remote-control'
  | 'key-fob'
  | 'keypad'
  | 'standard-warning-device'
  | 'glass-break-sensor'
  | 'security-repeater'
  // 0x8000-0xfffe manufacturer specific types
  | 'invalid';

const IAS_ZONE_STATE_ZCL_ATTRIBUTE_MAPPER = enumZCLAttributeMapper<ZCLIASZoneType>([
  [0x0000, 'standard-cie'],
  [0x000d, 'motion-sensor'],
  [0x0015, 'contact-switch'],
  [0x0016, 'door-window-handle'],
  [0x0028, 'fire-sensor'],
  [0x002a, 'water-sensor'],
  [0x002b, 'carbon-monoxide-sensor'],
  [0x002c, 'personal-emergency-device'],
  [0x002d, 'vibration-movement-sensor'],
  [0x010f, 'remote-control'],
  [0x0115, 'key-fob'],
  [0x021d, 'keypad'],
  [0x0225, 'standard-warning-device'],
  [0x0226, 'glass-break-sensor'],
  [0x0229, 'security-repeater'],
  [0xffff, 'invalid'],
]);
